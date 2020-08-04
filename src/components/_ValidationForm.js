import React, {useState} from 'react'
import {Col, Row, Button, Form, Input} from 'reactstrap'
import { useFetchRanges } from '../customHooks/ranges'
import LoadingSpinner from './_Loading'
import Error from './_Error'
import {jsUcfirst} from './../helpers'

const ValidationForm = props => {
  const [value, setValue] = useState('default');
  const [localError, setLocalError] = useState(null)
  const {data, loading, error} = useFetchRanges()
  const handleInputChange = (event) => {
    event.persist()
    setValue((previousState) => previousState === 'default' ? ({[event.target.name]: event.target.value}) : ({...previousState, [event.target.name]: event.target.value}));
  }

  if (loading) return <LoadingSpinner />
  if (error) return <Error message={error}/>
  const { numerical_features, categorical_features } = data
  const validate = (values) => {
    let total = numerical_features.length + categorical_features.length
    if (total !== Object.keys(values).length) setLocalError('Todos los campos son obligatorios')
    else props.handleValue(value)
  }
  return (
    <>
    <h2 className="mb-2">Valoriza tu propiedad</h2>
    <p>Ingresa la siguiente información acerca de tu propiedad y de esta forma,<br/>
    calcularemos el valor utilizando nuestro modelo <br />de machine learning</p>
    <Form className="my-4 w-50 mx-auto">
      {
        categorical_features.map(item => (
          <Row key={item.name} className="mb-1">
            <Col sm="6 d-flex justify-content-start"><p>{jsUcfirst(item.name)}</p></Col>
            <Col sm="6">
              <select name={item.name} defaultValue="default" required onChange={handleInputChange}>
                <option value="default" disabled></option>
                {
                  item.allowed_values.map(value => <option value={value} key={value}>{jsUcfirst(value)}</option>)
                }
              </select>
            </Col>
          </Row>
        ))
      }
      {
        numerical_features.map(item => (
          <Row key={item.name} className="mb-1">
            <Col sm="6 d-flex justify-content-start"><p>{jsUcfirst(item.name)}</p></Col>
            <Col sm="6">
              <Input type="number" name={item.name} min={item.min.toFixed(4)} max={item.max.toFixed(4)} step={item.min % 1 === 0 ? "1" : "0.0001"} required onChange={handleInputChange}/>
            </Col>
          </Row>
        ))
      }
      {localError && <p className="text-danger my-2">{localError}</p>}
      <Button color="info" className="evaluate-property mt-5" onClick={(e) => {e.preventDefault()
      validate(value)}} type="submit">Evaluar mi propiedad</Button>
    </Form>
    </>
  )
}

export default ValidationForm
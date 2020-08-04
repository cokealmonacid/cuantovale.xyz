import React from 'react'
import {Col, Row, Button, Form, Input} from 'reactstrap'

const ValidationForm = props => {
  const { numerical_features, categorical_features } = props
  const [comuna, tipo] = categorical_features
  console.log(comuna, tipo)
  console.log(numerical_features)
  return (
    <Form className="my-4 w-50 mx-auto">
    <Row className="mb-3">
      <Col sm="6 d-flex justify-content-start">
        <p>Tipo:</p>
      </Col>
      <Col sm="6">
        <select name="type" placeholder="Tipo de vivienda">
          <option disabled selected>Tipo de vivienda</option>
          <option>1</option>
          <option>1</option>
        </select>
      </Col>
    </Row>
    <Row className="mb-3">
      <Col sm="6 d-flex justify-content-start">
        <p>Superficie Total (mt2):</p>
      </Col>
      <Col sm="6">
        <Input type="text" name="type" />
      </Col>
    </Row>
    <Row className="mb-3">
      <Col sm="6 d-flex justify-content-start">
        <p>Superficie útil (mt2):</p>
      </Col>
      <Col sm="6">
        <Input type="text" name="type" />
      </Col>
    </Row>
    <Row className="mb-3">
      <Col sm="6 d-flex justify-content-start">
        <p>Dormitorios:</p>
      </Col>
      <Col sm="6">
        <Input type="text" name="type" />
      </Col>
    </Row>
    <Row className="mb-3">
      <Col sm="6 d-flex justify-content-start">
        <p>Baños:</p>
      </Col>
      <Col sm="6">
        <Input type="text" name="type" />
      </Col>
    </Row>
    <Row className="mb-3">
      <Col sm="6 d-flex justify-content-start">
        <p>Latitud:</p>
      </Col>
      <Col sm="6">
        <Input type="text" name="type" />
      </Col>
    </Row>
    <Row className="mb-3">
      <Col sm="6 d-flex justify-content-start">
        <p>Longitud:</p>
      </Col>
      <Col sm="6">
        <Input type="text" name="type" />
      </Col>
    </Row>
    <Row className="mb-3">
      <Col sm="6 d-flex justify-content-start">
        <p>Comuna:</p>
      </Col>
      <Col sm="6">
        <Input type="text" name="type" />
      </Col>
    </Row>
    <Button color="info" className="evaluate-property mt-5" >Evaluar mi propiedad</Button>
  </Form>
  )
}

export default ValidationForm;
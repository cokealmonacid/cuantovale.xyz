import React, { useRef, useReducer } from 'react';
import { Button, Col, Row} from 'reactstrap'
import { fetchEvaluates } from './customHooks/evaluates'
import { initialState, evaluateReducer, clean } from './ducks/evaluates'
import {Error, LoadingPrice, Price, ValidationForm} from './components'
import logo from './assets/dollar.png'
import './App.css'

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)

function App() {
  const myRef = useRef(null)
  const executeScroll = () => scrollToRef(myRef)
  const [{loading, error, data}, dispatch] = useReducer(evaluateReducer, initialState)
  const handleSubmit = values => fetchEvaluates(values, dispatch)
  let content = <ValidationForm handleValue={handleSubmit}/>
  if (loading) content = <LoadingPrice />
  if (error) content = <Error />
  if (data && data.precio) content = <Price price={data.precio} again={() => dispatch(clean())}/>
  return (
    <>
      <div className="main">
        <div className="wrapper">
          <header className="p-3 w-100">
            <img src={logo} alt="cuantovale.xyz" className="logo"/>
            <h3 className="font-weight-normal">cuantovale.xyz</h3>
          </header>
          <div className="title">
            <h1 className="mb-2">Nos encargamos de evaluar tu casa</h1>
            <Button color="info" className="evaluate" onClick={executeScroll}>Evaluar</Button>
          </div>
        </div>
      </div>
      <div className="container p-5" ref={myRef}>{content}</div>
      <footer>
        <Row className="mx-0">
          <Col xs="12" className="py-5">
            <p>Jorge Almonacid - 2020</p>
          </Col>
        </Row>
      </footer>
    </>
  );
}

export default App;

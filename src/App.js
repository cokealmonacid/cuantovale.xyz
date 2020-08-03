import React, { useRef } from 'react';
import { Button, Col, Form, Row, Input} from 'reactstrap'
import logo from './assets/dollar.png'
import './App.css'

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)

function App() {
  const myRef = useRef(null)
  const executeScroll = () => scrollToRef(myRef)

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
      <div className="container p-5" ref={myRef}>
        <h2 className="mt-5 mb-2">Valoriza tu propiedad</h2>
        <p>Ingresa la siguiente información acerca de tu propiedad y de esta forma,<br/>
        calcularemos el valor utilizando nuestro modelo <br />de machine learning</p>
        <Form className="my-4 w-50 mx-auto">
          <Row className="mb-3">
            <Col sm="6 d-flex justify-content-start">
              <p>Tipo:</p>
            </Col>
            <Col sm="6">
              <select name="type">
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
      </div>
      <footer>
        <Row>
          <Col xs="12" className="py-5">
            <p>Jorge Almonacid - 2020</p>
          </Col>
        </Row>
      </footer>
    </>
  );
}

export default App;

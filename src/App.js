import React, { useRef } from 'react';
import { Button, Col, Row} from 'reactstrap'
import logo from './assets/dollar.png'
import { useFetchRanges } from './customHooks/ranges'
import {Error, LoadingSpinner, ValidationForm} from './components'
import './App.css'

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)

function App() {
  const myRef = useRef(null)
  const executeScroll = () => scrollToRef(myRef)
  const {data, loading, error} = useFetchRanges()
  if (loading) return <LoadingSpinner />
  if (error) return <Error message={error}/>
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
        <h2 className="mb-2">Valoriza tu propiedad</h2>
        <p>Ingresa la siguiente información acerca de tu propiedad y de esta forma,<br/>
        calcularemos el valor utilizando nuestro modelo <br />de machine learning</p>
        <ValidationForm data={data}/>
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

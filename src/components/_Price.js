import React from 'react'
import { Button } from 'reactstrap'

const Price = props => (
    <>
        <h2>Calculamos para tu priedad un<br/>valor de:</h2>
        <h1 className="value my-5">{`${props.price.toFixed(1)} UF`}</h1>
        <p>Este valor fue calculado considerando la información entregada.</p>
        <Button color="info" className="evaluate-property mt-5" onClick={props.again}>Evaluar otra propiedad</Button>
    </>
)

export default Price
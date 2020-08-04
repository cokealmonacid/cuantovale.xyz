import React from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

const LoadingPrice = () => (
    <div className="container align-itmes-center justify-content-center">
        <Loader
            type="ThreeDots"
            color="#00BFFF"
            height={100}
            width={100}
        />
        <p>Calculando valor de propiedad</p>
    </div>
)

export default LoadingPrice
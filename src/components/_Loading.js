import React from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

const LoadingSpinner = () => (
    <div className="container d-flex align-itmes-center justify-content-center content-loader">
        <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
        />
    </div>
)

export default LoadingSpinner
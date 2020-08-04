import axios from 'axios'
import {
    fetchLoading,
    fetchSuccess,
    fetchError,
    clean
} from '../ducks/evaluates'
import {setData} from '../helpers'

export function fetchEvaluates(values, dispatch) {
    fetchLoading()
    const url = 'https://real-estate-api-ndtm7xbgda-uc.a.run.app/predict'
    const data = setData(values)
    axios.post(url, data)
    .then(response => dispatch(fetchSuccess(response.data)))
    .catch(error => dispatch(fetchError(error)))
}

export function useClean(dispatch) {
    dispatch(clean())
}
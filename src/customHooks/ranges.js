import { useEffect, useReducer } from 'react'
import axios from 'axios'
import {
    initialState,
    rangesReducer,
    fetchSuccess,
    fetchError
} from '../ducks/ranges'

export function useFetchRanges() {
    const url = '/features_info'
    const [data, dispatch] = useReducer(rangesReducer, initialState)
    useEffect(() => {
        axios.get(url)
        .then(response => dispatch(fetchSuccess(response.data)))
        .catch(error => dispatch(fetchError(error)))
    }, [url])

    return data
}
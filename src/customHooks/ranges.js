import { useEffect, useReducer } from 'react'
import axios from 'axios'
import {
    initialState,
    rangesReducer,
    fetchSuccess,
    fetchError
} from '../ducks/ranges'

export function useFetchRanges() {
    const url = 'https://real-estate-api-ndtm7xbgda-uc.a.run.app/features_info'
    const [data, dispatch] = useReducer(rangesReducer, initialState)
    useEffect(() => {
        axios.get(url, {headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': '*',
          },})
        .then(response => dispatch(fetchSuccess(response.data)))
        .catch(error => dispatch(fetchError(error)))
    }, [url])

    return data
}
const FETCH_LOADING = 'FETCH_LOADING'
const FETCH_SUCCESS = 'FETCH_SUCCESS'
const FETCH_ERROR = 'FETCH_ERROR'
const CLEAN = 'CLEAN'

export const fetchLoading = payload => ({
    type: FETCH_SUCCESS,
})

export const fetchSuccess = payload => ({
    type: FETCH_SUCCESS,
    payload
})

export const fetchError = payload => ({
    type: FETCH_ERROR,
    payload
})

export const clean = () => ({
    type: CLEAN
})

export const initialState = {
    error: null,
    loading: false,
    data: null,
}

export const evaluateReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_LOADING:
            return {...state, loading: true}
        case FETCH_SUCCESS:
            return {...state, loading: false, data: action.payload}
        case FETCH_ERROR:
            return {...state, loading: false, error: action.payload}
        case CLEAN:
            return {...initialState}
        default:
            return state
    }
}
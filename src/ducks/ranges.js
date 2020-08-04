const FETCH_SUCCESS = 'FETCH_SUCCESS'
const FETCH_ERROR = 'FETCH_ERROR'

export const fetchSuccess = payload => ({
    type: FETCH_SUCCESS,
    payload
})

export const fetchError = payload => ({
    type: FETCH_ERROR,
    payload
})

export const initialState = {
    error: null,
    loading: true,
    data: null,
}

export const rangesReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SUCCESS:
            return {...state, loading: false, data: action.payload}
        case FETCH_ERROR:
            return {...state, loading: false, error: action.payload}
        default:
            return state
    }
}
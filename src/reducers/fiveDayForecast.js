const initialState = {}

const fiveDayForecast = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_FORECAST_SUCCESS':
            return action.payload.data
                .map((item, e) => e % 8 === 7 && item)
                .filter(item => item !== false)
        default:
            return state
    }
}

export default fiveDayForecast

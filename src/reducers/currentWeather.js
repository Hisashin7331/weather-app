const initialState = {}

const currentWeather = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_WEATHER_SUCCESS':
            return action.payload.data
        default:
            return state
    }
}

export default currentWeather

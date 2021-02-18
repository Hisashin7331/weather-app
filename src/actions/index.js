import axios from 'axios'
import { config } from 'config'

const { apiKey } = config
const currentURL = 'https://api.openweathermap.org/data/2.5/weather'
const forecastURL = 'https://api.openweathermap.org/data/2.5/forecast'
const units = 'metric'

export const fetchWeather = id => dispatch => {
    dispatch({ type: 'FETCH_WEATHER_REQUEST' })

    return axios(currentURL, {
        params: {
            id,
            units,
            appid: apiKey,
        },
    })
        .then(({ data }) => {
            dispatch({
                type: 'FETCH_WEATHER_SUCCESS',
                payload: {
                    data,
                },
            })
        })
        .catch(error => {
            console.log(error)
            dispatch({ type: 'FETCH_FORECAST_FAILURE' })
        })
}

export const fetchForecast = id => dispatch => {
    dispatch({ type: 'FETCH_FORECAST_REQUEST' })

    return axios(forecastURL, {
        params: { id, units, appid: apiKey },
    })
        .then(({ data }) => {
            dispatch({
                type: 'FETCH_FORECAST_SUCCESS',
                payload: {
                    data: data.list,
                },
            })
        })
        .catch(error => {
            console.log(error)
            dispatch({ type: 'FETCH_FORECAST_FAILURE' })
        })
}

/* eslint-disable no-shadow */
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { fetchForecast, fetchWeather } from 'actions'

import { Styled, City, Flag } from './styles'

const Card = ({
    id,
    name,
    country,
    state,
    clearInput,
    fetchWeather,
    fetchForecast,
}) => {
    console.log()
    const fetch = () => {
        clearInput('')
        fetchWeather(id)
        fetchForecast(id)
    }
    return (
        <Styled onClick={fetch}>
            <City>
                {name}
                {state !== '' && `, ${state}`}
            </City>
            <Flag
                src={`https://www.countryflags.io/${country}/flat/32.png`}
                alt={country}
            />
        </Styled>
    )
}

const mapDispatchToProps = dispatch => ({
    fetchWeather: data => dispatch(fetchWeather(data)),
    fetchForecast: data => dispatch(fetchForecast(data)),
})

export default connect(null, mapDispatchToProps)(Card)

Card.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    clearInput: PropTypes.func.isRequired,
    fetchWeather: PropTypes.func.isRequired,
    fetchForecast: PropTypes.func.isRequired,
}

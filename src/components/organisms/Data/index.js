import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { nextFiveDays } from 'data/nextFiveDays'
import Tile from 'components/molecules/Tile'

import { Container } from './styles'

const Data = ({ forecast }) => {
    const arrayOfDates = nextFiveDays()
    return (
        <Container>
            {forecast.length > 0 &&
                forecast.map((item, index) => (
                    <Tile
                        key={item.dt}
                        temp={item.main.temp}
                        icon={item.weather[0].icon}
                        date={arrayOfDates[index]}
                    />
                ))}
        </Container>
    )
}

const mapStateToProps = ({ fiveDayForecast }) => ({
    forecast: fiveDayForecast,
})

export default connect(mapStateToProps)(Data)

Data.propTypes = {
    forecast: PropTypes.arrayOf(PropTypes.object),
}

Data.defaultProps = {
    forecast: [],
}

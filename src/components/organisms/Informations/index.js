import React from 'react'
import propTypes from 'prop-types'
import { connect } from 'react-redux'

import {
    Styled,
    City,
    Icon,
    Temperature,
    Section,
    MinMax,
    More,
    Weather,
} from './styles'

const Informations = ({
    error,
    temp,
    tempMin,
    tempMax,
    city,
    country,
    weatherName,
    icon,
}) => {
    return (
        <Styled>
            <Section icon>
                <div>
                    <City>
                        {city}
                        <span
                            style={{
                                marginLeft: '8px',
                                fontSize: '.5em',
                            }}
                        >
                            {country}
                        </span>
                    </City>
                    <Temperature>{temp} &#x00BA;C</Temperature>
                </div>
                {!error && <Icon src={icon} alt='Weather icon' />}
            </Section>
            <Section>
                <More>
                    <MinMax>
                        <span>MIN</span>
                        {tempMin} &#x00BA;C
                    </MinMax>
                    <MinMax>
                        <span>MAX</span>
                        {tempMax} &#x00BA;C
                    </MinMax>
                </More>
                <Weather>{weatherName}</Weather>
            </Section>
        </Styled>
    )
}

const mapStateToProps = ({ currentWeather }) => {
    if (Object.keys(currentWeather).length !== 0) {
        return {
            temp: Math.round(currentWeather.main.temp),
            tempMin: Math.round(currentWeather.main.temp_min),
            tempMax: Math.round(currentWeather.main.temp_max),
            city: currentWeather.name,
            country: currentWeather.sys.country,
            weatherName: currentWeather.weather[0].main,
            icon: `http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`,
        }
    }
    return {
        error: true,
    }
}

export default connect(mapStateToProps)(Informations)

Informations.propTypes = {
    error: propTypes.bool,
    temp: propTypes.number,
    tempMin: propTypes.number,
    tempMax: propTypes.number,
    city: propTypes.string,
    country: propTypes.string,
    weatherName: propTypes.string,
    icon: propTypes.string,
}

Informations.defaultProps = {
    error: false,
    temp: 0,
    tempMin: 0,
    tempMax: 0,
    city: 'City not set',
    country: '',
    weatherName: '',
    icon: 'x',
}

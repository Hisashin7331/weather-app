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
                <Icon src={icon} alt='Weather icon' />
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

const mapStateToProps = state => {
    return {
        temp: Math.round(state.main.temp),
        tempMin: Math.round(state.main.temp_min),
        tempMax: Math.round(state.main.temp_max),
        city: state.name,
        country: state.sys.country,
        weatherName: state.weather[0].main,
        icon: `http://openweathermap.org/img/wn/${state.weather[0].icon}@2x.png`,
    }
}

export default connect(mapStateToProps)(Informations)

Informations.propTypes = {
    temp: propTypes.number,
    tempMin: propTypes.number,
    tempMax: propTypes.number,
    city: propTypes.string,
    country: propTypes.string,
    weatherName: propTypes.string,
    icon: propTypes.string,
}

Informations.defaultProps = {
    temp: 'X',
    tempMin: 'X',
    tempMax: 'X',
    city: 'City not set',
    country: '',
    weatherName: '',
    icon: 'x',
}

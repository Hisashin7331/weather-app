import React from 'react'
import PropTypes from 'prop-types'

import { Styled, Icon } from './styles'

const Tile = ({ temp, icon, date }) => {
    return (
        <Styled>
            <h3>{date}</h3>
            <Icon
                src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                alt='icon'
            />
            <h1>{Math.round(temp)} &#x00BA;C</h1>
        </Styled>
    )
}

export default Tile

Tile.propTypes = {
    temp: PropTypes.number.isRequired,
    icon: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
}

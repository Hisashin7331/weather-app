import React from 'react'
import PropTypes from 'prop-types'

import Card from 'components/molecules/Card'

import cityList from 'data/city.list.min.json'

import { Container } from './styles'

const Results = ({ value, clearInput }) => {
    return (
        <Container>
            {cityList
                .filter(item =>
                    item.name
                        .toUpperCase()
                        .includes(value.toUpperCase()),
                )
                .map((item, index) => {
                    if (index < 6) {
                        return (
                            <Card
                                clearInput={clearInput}
                                key={item.id}
                                id={item.id}
                                name={item.name}
                                country={item.country}
                                state={item.state}
                            />
                        )
                    }
                    return null
                })}
        </Container>
    )
}

export default Results

Results.propTypes = {
    value: PropTypes.string.isRequired,
    clearInput: PropTypes.func.isRequired,
}

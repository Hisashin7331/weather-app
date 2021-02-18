import React, { useState } from 'react'

import { Content } from 'components/atoms/Content'
import Clock from 'components/molecules/Clock'
import Bar from 'components/organisms/Bar'

import { Container, Search } from './styles'

const Home = () => {
    const [inputValue, updateInputValue] = useState('')
    return (
        <Content>
            <Container>
                <Search
                    type='text'
                    placeholder='Search...'
                    value={inputValue}
                    onChange={e => updateInputValue(e.target.value)}
                />
                <Clock />
            </Container>
            <Bar>jk</Bar>
        </Content>
    )
}

export default Home

import React, { useState } from 'react'

import { Content } from 'components/atoms/Content'
import Clock from 'components/molecules/Clock'
import Bar from 'components/organisms/Bar'
import Results from 'components/organisms/Results'
import Data from 'components/organisms/Data'

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
                {inputValue.length > 3 ? (
                    <Results
                        value={inputValue}
                        clearInput={updateInputValue}
                    />
                ) : (
                    <Data />
                )}
            </Container>
            <Bar />
        </Content>
    )
}

export default Home

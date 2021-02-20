import styled, { css } from 'styled-components'

const Styled = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Roboto', sans-serif;
    color: white;
    ${({ error }) =>
        error &&
        css`
            margin-top: 32px;
        `}
`

const Current = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

const City = styled.h1`
    font-size: 32px;
    margin: 0;
`

const Icon = styled.img`
    height: 128px;
`

const Temperature = styled.h2`
    font-size: 24px;
    margin: 0;
`

const Section = styled.div`
    display: flex;
    width: ${props =>
        props.icon ? 'calc(100% - 32px)' : 'calc(100% - 64px)'};
    padding: ${props => (props.icon ? '16px 0 16px 32px' : '0 32px')};
    align-items: center;
    justify-content: space-between;
`

const MinMax = styled.div`
    display: flex;
    height: 64px;
    width: 64px;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`

const More = styled.div`
    display: flex;
`

const Weather = styled.div`
    width: 64px;
    display: flex;
    justify-content: center;
    height: 64px;
    align-items: flex-start;
`

export {
    Styled,
    Current,
    Icon,
    City,
    Temperature,
    Section,
    MinMax,
    More,
    Weather,
}

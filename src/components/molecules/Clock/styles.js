import styled from 'styled-components'

const Styled = styled.h1`
    position: absolute;
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    color: #e96e50;
    @media (max-height: 1080px) {
        font-size: 64px;
        right: 32px;
        top: 32px;
    }
    @media (min-height: 1081px) and (max-height: 1440px) {
        font-size: 86px;
        right: 43px;
        top: 43px;
    }
    @media (min-height: 1441px) and (max-height: 2160px) {
        font-size: 128px;
        right: 64px;
        top: 64px;
    }
    @media (max-width: 1200px) {
        display: none;
    }
`

export { Styled }

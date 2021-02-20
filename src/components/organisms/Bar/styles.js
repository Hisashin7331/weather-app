import styled from 'styled-components'

const Styled = styled.div`
    width: 32%;
    background: #2d3142;
    height: 100%;
    @media (max-width: 1200px) {
        padding-top: 64px;
        height: calc(100% - 64px);
        width: 100%;
    }
`

export { Styled }

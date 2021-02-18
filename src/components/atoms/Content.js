import styled, { css } from 'styled-components'

export const Content = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${props => props.left && 'rgb(0, 0, 0, 0.3)'};
    position: relative;
    box-shadow: 0 0 32px 1px rgb(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    ${props =>
        props.flex &&
        css`
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-direction: column;
        `}
`

import styled, { css } from 'styled-components'

export const Content = styled.div`
    width: calc(100% - 32px);
    height: calc(100% - 32px);
    padding: 16px;
    background-color: ${props => props.left && 'rgb(0, 0, 0, 0.3)'};
    border-radius: ${props => props.left ? '32px 0 0 32px' : '0 32px 32px 0'};
    position: relative;
    box-shadow: ${props => props.left && '0 0 32px 1px rgb(0, 0, 0, 0.5), inset 0 0 64px 1px rgb(0, 0, 0, 0.3)'};

    ${props => props.flex && css`
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: column;
    `}
`

// 'rgb(53, 60, 78, 0.7)'
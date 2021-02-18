import styled from 'styled-components'

const Styled = styled.button`
    border: none;
    padding: 8px;
    width: calc(100% - 16px);
    height: calc(100% - 16px);
    background: #2d3142;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    cursor: pointer;
    color: #e96e50;
    box-shadow: 4px 4px 8px 1px rgb(0, 0, 0, 0.3);
    &:focus {
        outline: 0;
    }
`

const Icon = styled.img`
    width: 70%;
`

export { Styled, Icon }

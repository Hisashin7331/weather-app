import styled from 'styled-components'

const Styled = styled.button`
    border: none;
    padding: 8px;
    width: calc(100% - 16px);
    height: calc(100% - 16px);
    background: #2d3142;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    color: #e96e50;
    box-shadow: 4px 4px 8px 1px rgb(0, 0, 0, 0.3);
    &:focus {
        outline: 0;
    }
`

const City = styled.h1`
    font-size: 32px;
    font-family: 'Roboto', sans-serif;
    margin: 0;
`

const Flag = styled.img`
    height: 48px;
`

export { Styled, City, Flag }

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
    @media (max-width: 719px) {
        display: grid;
        grid-template-columns: repeat(3, 33%);
        grid-template-rows: 100%;
        justify-content: center;
        justify-items: center;
        align-items: center;
        align-content: center;
        h3 {
            justify-self: flex-start;
        }
        h1 {
            justify-self: flex-end;
        }
    }
`

const Icon = styled.img`
    width: 100%;
    @media (max-width: 721px) {
        width: auto;
        height: 200%;
    }
`

export { Styled, Icon }

import styled from 'styled-components'

const Container = styled.div`
    position: relative;
    height: 100%;
    width: 68%;
    @media (max-width: 1200px) {
        position: absolute;
        width: 100%;
        padding-top: 32px;
        height: calc(100% - 32px);
        display: flex;
        align-items: center;
        flex-direction: column;
    }
`

const Search = styled.input`
    width: 256px;
    height: 32px;
    background: transparent;
    border: none;
    border-bottom: 1px solid #e96e50;
    position: absolute;
    left: 43px;
    top: 43px;
    color: #e96e50;
    &::placeholder {
        color: #e96e50;
    }
    &:focus {
        outline: 0;
    }
    @media (max-width: 1200px) {
        width: 85%;
        position: static;
        background: white;
        color: black;
        padding: 8px;
        border-radius: 64px;
        &::placeholder {
            color: black;
        }
    }
`

export { Container, Search }

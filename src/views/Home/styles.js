import styled from 'styled-components'

const Container = styled.div`
    position: relative;
    height: 100%;
    width: 68%;
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
`

export { Container, Search }

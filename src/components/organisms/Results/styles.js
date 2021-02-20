import styled from 'styled-components'

const Container = styled.div`
    width: calc(100% - 32px);
    padding: 16px;
    height: calc(50% - 32px);
    position: absolute;
    bottom: 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, 50%);
    grid-template-rows: repeat(auto-fit, 33%);
    align-items: center;
    justify-items: center;
    @media (max-width: 719px) {
        grid-template-columns: 100%;
        grid-template-rows: repeat(auto-fit, 20%);
        height: 50%;
    }
`

export { Container }

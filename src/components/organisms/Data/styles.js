import styled from 'styled-components'

const Container = styled.div`
    width: calc(100% - 32px);
    padding: 16px;
    height: calc(40% - 32px);
    position: absolute;
    bottom: 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, 20%);
    grid-template-rows: 100%;
    align-items: center;
    justify-items: center;
    @media (min-width: 720px) and (max-width: 1200px) {
        height: 30%;
    }
    @media (max-width: 719px) {
        grid-template-columns: 100%;
        grid-template-rows: repeat(auto-fit, 20%);
        height: 50%;
    }
`

export { Container }

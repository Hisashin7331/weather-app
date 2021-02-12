import styled from 'styled-components'
import background from 'assets/background.jpg'
import rain from 'assets/weather/rain.webp'


const Page = styled.div`
    width: 100vw;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`

const BGImage = styled.div`
    background-image: url(${background});
    filter: blur(25px);
    background-size: auto 100%;
    width: 110%;
    height: 110%;
    position: absolute;
    left: -5%;
    top: -5%;
    z-index: -1;
`

const App = styled.div`
    width: ${props => props.path === '/login' ? '40%' : '95%'};
    height: ${props => props.path === '/login' ? '40%' : '95%'};
    display: flex;
    box-shadow: 0 0 32px 1px rgb(0,0,0,0.5);
    border-radius: 32px;
    background-image: url(${rain});
    background-size: auto 100%;
    background-color: rgb(0,0,0,0.3);
    @media (max-height: 1080px) {
        max-width: calc(0.95 * 1920px);
    }
    @media (min-height: 1081px) and (max-height: 1440px) {
        max-width:  calc(0.95 * 2560px);
    }
    @media (min-height: 1441px) and (max-height: 2160px) {
        max-width:  calc(0.95 * 3840px);
    }
`

export { Page, App, BGImage }
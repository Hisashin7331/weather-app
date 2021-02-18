import styled from 'styled-components'

const Form = styled.form`
    width: 30%;
    height: 40%;
    max-width: 480px;
    max-height: 480px;
    background: rgb(255, 255, 255, 0.75);
    padding: 32px;
    margin-top: 5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    position: absolute;
    top: 50%;
    transform: translateY(-75%);

    h1 {
        font-family: 'Lato', sans-serif;
        font-weight: 500;
        color: #666666;
        letter-spacing: 4px;
    }
`

const Input = styled.div`
    width: 80%;
    height: 64px;
    margin: 16px;
    display: flex;
    span {
        width: 64px;
        height: 64px;
        background: #777777;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
            height: 50%;
        }
    }
    input {
        width: calc(100% - 96px);
        height: 32px;
        margin: 0;
        padding: 16px;
        border: none;
        background: #555555;
        color: white;
        &::placeholder {
            color: white;
            opacity: 0.6;
        }
        &:focus {
            outline: none;
        }
    }
`

const Register = styled.button`
    width: 75%;
    height: 80px;
    background: rgb(255, 255, 255, 0.5);
    position: absolute;
    bottom: -88px;
    border: none;
    color: #333333;
    font-family: 'Lato', sans-serif;
    font-size: 24px;
    letter-spacing: 2px;
    font-weight: 700;
    &:focus {
        outline: none;
    }
    cursor: pointer;
`

const Submit = styled.button`
    margin-top: 32px;
    width: 70%;
    background: rgb(85, 85, 85, 0.3);
    border: none;
    height: 48px;
    font-family: 'Poppins', sans-serif;
    color: rgb(0, 0, 0, 0.5);
    font-weight: 700;
    &:focus {
        outline: none;
    }
    cursor: pointer;
`

export { Form, Input, Submit, Register }

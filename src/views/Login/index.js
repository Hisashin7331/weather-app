import React, { useState } from 'react'

// components
import { Content } from 'components/atoms/Content'

// assets
import person from 'assets/login/person.svg'
import lock from 'assets/login/lock.svg'
// import done from 'assets/login/done.svg'
// import register from 'assets/login/register.svg'

// styles
import { Form, Input, Submit, Register } from './styles'

const Login = () => {
    const [isLogin, switchLogin] = useState(true)
    const [login, updateLogin] = useState('')
    const [password, updatePassword] = useState('')

    const submitForm = e => {
        e.preventDefault()
        if (isLogin) {
            console.log('login user')
        } else {
            console.log('register user')
        }
    }

    return (
        <Content left flex>
            <Form>
                <h1>{isLogin ? 'LOGIN' : 'REGISTER'}</h1>
                <Input>
                    <span>
                        <img src={person} alt='login icon' />
                    </span>
                    <input
                        type='text'
                        placeholder='Login'
                        autoComplete='off'
                        value={login}
                        onChange={e => updateLogin(e.target.value)}
                    />
                </Input>
                <Input>
                    <span>
                        <img src={lock} alt='login icon' />
                    </span>
                    <input
                        type='password'
                        placeholder='Password'
                        value={password}
                        onChange={e => updatePassword(e.target.value)}
                    />
                </Input>
                <Submit onClick={e => submitForm(e)}>
                    {isLogin ? 'LOGIN' : 'REGISTER'}
                </Submit>
                <Register
                    onClick={e => {
                        e.preventDefault()
                        switchLogin(!isLogin)
                    }}
                >
                    {isLogin ? 'REGISTER' : 'LOGIN'}
                </Register>
            </Form>
        </Content>
    )
}

export default Login

import React, { useRef } from 'react'
import { Form } from '@unform/web'
import Input from '../../components/input'
import { useDispatch } from 'react-redux'
import { loginFetch } from '../../store/fetch_actions/auth'

const Login = () => {
  const dispatch = useDispatch()
  const formRef = useRef()

  const handleSubmit = (data) => {
    dispatch(loginFetch(data))
  }

  return (
    <Form onSubmit={handleSubmit} ref={formRef}>
      <h1>Login</h1>
      <Input
        name="email"
        type="email"
        placeholder="Email"
      />
      <br />
      <Input
        name="password"
        type="password"
        placeholder="Senha"
      />
      <br />
      <button
        type="submit"
      >
        Login
        </button>
    </Form>
  )
}

export default Login
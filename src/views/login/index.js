import React, { useRef } from 'react'
import { Form } from '@unform/web'
import InputUnform from '../../components/input'
import { useDispatch } from 'react-redux'
import { loginFetch } from '../../store/fetch_actions/auth'
import { Input, FormControl, FormLabel, Button, Heading, Box } from '@chakra-ui/react'

const Login = () => {
  const dispatch = useDispatch()
  const formRef = useRef()

  const handleSubmit = (data) => {
    dispatch(loginFetch(data))
  }

  return (
    <Box w="100%" p="4">
      <Form onSubmit={handleSubmit} ref={formRef}>
        <Heading>Login</Heading>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input as={InputUnform}
            name="email"
            type="email"
            placeholder="Email"
          />
        </FormControl>
        <br />
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input as={InputUnform}
            name="password"
            type="password"
            placeholder="Senha"
          />
        </FormControl>
        <br />
        <Button
          type="submit"
        >
          Login
        </Button>
      </Form>
    </Box>
  )
}

export default Login
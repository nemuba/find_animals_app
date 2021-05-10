import React from 'react'
import { Form } from '@unform/web'
import InputUnform from '../../components/input'
import { useDispatch } from 'react-redux'
import { loginFetch } from '../../store/fetch_actions/auth'
import { Input, FormControl, FormLabel, Button, Heading, Box, Flex } from '@chakra-ui/react'

const Login = () => {
  const dispatch = useDispatch()


  const handleSubmit = (data) => {
    dispatch(loginFetch(data))
  }

  return (
    <Box w="100%" p="10">
      <Form onSubmit={handleSubmit}>
        <Heading>Entrar</Heading>
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
          <FormLabel>Senha</FormLabel>
          <Input as={InputUnform}
            name="password"
            type="password"
            placeholder="Senha"
          />
        </FormControl>
        <Flex mt="4">
          <Button type="submit" colorScheme="facebook">Entrar</Button>
        </Flex>
      </Form>
    </Box>
  )
}

export default Login
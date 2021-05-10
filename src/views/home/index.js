import React from 'react'
import { Box, Heading, Link } from '@chakra-ui/layout'
import { Link as LinkRouter } from 'react-router-dom'
import { Button, Icon } from '@chakra-ui/react'
import Signup from '../signup'
import { useSelector } from 'react-redux'
import { FaDog, FaSearchLocation } from 'react-icons/fa'

const Home = () => {
  const { isAuthenticated } = useSelector(state => state.auth)

  return (
    <Box m="5" w="100%" p="4">
      {isAuthenticated ? '' : (<Box bg="green.200" w="90%" borderRadius="5" p="4" mb="10">
        <Heading p="5">Criar uma conta</Heading>
        <Signup />
      </Box>)}
      <Box bg="green.200" w="90%" borderRadius="5" p="4">
        <Heading p="5">Cadastrar um animal perdido</Heading>
        <Button
          bg="dark"
          p={4}
          ml="4"
          fontWeight="bold"
          bgGradient="linear(to-r, teal.500,green.500)"
          _hover={{
            bgGradient: "linear(to-r, red.500, yellow.500)",
          }}
        >
          <Link as={LinkRouter} to="/animals/create" color="white">
            <Icon as={FaDog} mr="2" />
            Cadastrar
          </Link>
        </Button>
      </Box>

      <Box bg="green.200" w="90%" borderRadius="5" p="5" mt="10">
        <Heading p="5">Procurar um animal ?</Heading>
        <Button
          bg="dark"
          p={4}
          ml="4"
          fontWeight="bold"
          bgGradient="linear(to-r, teal.500,green.500)"
          _hover={{
            bgGradient: "linear(to-r, red.500, yellow.500)",
          }}
        >
          <Link as={LinkRouter} to="/animals" color="white">
            <Icon as={FaSearchLocation} mr="2" />
            Procurar
          </Link>
        </Button>
      </Box>
    </Box>
  )
}

export default Home
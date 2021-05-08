import React from 'react'
import { Box, Heading, Link } from '@chakra-ui/layout'
import { Link as LinkRouter } from 'react-router-dom'
import { Button } from '@chakra-ui/button'

const ListAllCategory = () => {

  return (
    <Box m="5" w="100%" p="4">
      <Box bg="green.200" w="90%" borderRadius="5" p="4">
        <Heading>Cadastrar um animal perdido</Heading>
        <Button
          bg="dark"
          p={4}
          fontWeight="bold"
          bgGradient="linear(to-r, teal.500,green.500)"
          _hover={{
            bgGradient: "linear(to-r, red.500, yellow.500)",
          }}
        >
          <Link as={LinkRouter} to="/animals/create" color="white">
            Cadastrar
          </Link>
        </Button>
      </Box>

      <Box bg="green.200" w="90%" borderRadius="5" p="5" mt="10">
        <Heading>Procurar um animal ?</Heading>
        <Button
          bg="dark"
          p={4}
          fontWeight="bold"
          bgGradient="linear(to-r, teal.500,green.500)"
          _hover={{
            bgGradient: "linear(to-r, red.500, yellow.500)",
          }}
        >
          <Link as={LinkRouter} to="/animals" color="white">
            Procurar
          </Link>
        </Button>
      </Box>
    </Box>
  )
}

export default ListAllCategory
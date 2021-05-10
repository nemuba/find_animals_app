import React from 'react'
import { Menu, MenuButton, MenuItem, MenuList, Button, ChevronDownIcon, Box } from '@chakra-ui/react'
import { Link as LinkRouter } from 'react-router-dom'
import { useSelector } from 'react-redux'

const NavBar = () => {
  const { isAuthenticated } = useSelector(state => state.auth)
  return (
    <Box
      bg="dark"
      w="100%"
      p={4}
      fontWeight="bold"
      bgGradient="linear(to-r, teal.500,green.500)"
    >
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={ChevronDownIcon}
          bgGradient="linear(to-r, teal.500,green.500)"
          _hover={{
            bgGradient: "linear(to-r, red.500, yellow.500)",
          }}
        >
          Find Animals App
        </MenuButton>
        <MenuList>
          <MenuItem as={LinkRouter} to="/">
            Home
          </MenuItem>
          <MenuItem as={LinkRouter} to="/animals/create">
            Cadastrar um animal perdido
          </MenuItem>
          <MenuItem as={LinkRouter} to="/animals">
            Encontrar um animal perdido
          </MenuItem>
          {isAuthenticated ? (
            <MenuItem as={LinkRouter} to="/logout">
              Logout
            </MenuItem>
          ) : (
              <MenuItem as={LinkRouter} to="/login">
                Login
            </MenuItem>
          )}
        </MenuList>
      </Menu>
    </Box>
  )
}

export default NavBar
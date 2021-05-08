import React from 'react'
import { Menu, MenuButton, MenuItem, MenuList, Button, ChevronDownIcon, Box, Link } from '@chakra-ui/react'
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
          <MenuItem>
            <Link as={LinkRouter} to="/">
              Home
           </Link>
          </MenuItem>
          <MenuItem>
            <Link as={LinkRouter} to="/animals/create">
              Cadastrar um animal perdido
            </Link>
          </MenuItem>
          <MenuItem>
            <Link as={LinkRouter} to="/animals">
              Encontrar um animal perdido
            </Link>
          </MenuItem>
          {isAuthenticated ? (
            <MenuItem>
              <Link as={LinkRouter} to="/logout">
                Logout
              </Link>
            </MenuItem>
          ) : (
            <MenuItem>
              <Link as={LinkRouter} to="/login">
                Login
              </Link>
            </MenuItem>
          )}
        </MenuList>
      </Menu>
    </Box>
  )
}

export default NavBar
import React from 'react'
import { Icon, Menu, MenuButton, MenuItem, MenuList, Button, ChevronDownIcon, Box } from '@chakra-ui/react'
import { Link as LinkRouter } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { FaHome, FaDog, FaSearchLocation, FaSign, FaSignOutAlt } from 'react-icons/fa'

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
            <Icon as={FaHome} mr="2" />
            Home
          </MenuItem>
          <MenuItem as={LinkRouter} to="/animals/create">
            <Icon as={FaDog} mr="2" />
            Cadastrar um animal perdido
          </MenuItem>
          <MenuItem as={LinkRouter} to="/animals">
            <Icon as={FaSearchLocation} mr="2" />
            Encontrar um animal perdido
          </MenuItem>
          {isAuthenticated ? (
            <MenuItem as={LinkRouter} to="/logout">
              <Icon as={FaSignOutAlt} mr="2" />
              Logout
            </MenuItem>
          ) : (
              <MenuItem as={LinkRouter} to="/login">
                <Icon as={FaSign} mr="2" />
                Login
            </MenuItem>
          )}
        </MenuList>
      </Menu>
    </Box>
  )
}

export default NavBar
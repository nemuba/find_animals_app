import React from 'react'
import {
  Input,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  FormLabel,
  Stack,
  useDisclosure,
  DrawerFooter,
} from '@chakra-ui/react'
import { Form } from '@unform/web'
import { AddIcon } from '@chakra-ui/icons'
import { useDispatch } from 'react-redux'
import InputUnform from '../../components/input'
import { signupFetch } from '../../store/fetch_actions/auth'

const Signup = () => {
  const dispatch = useDispatch()
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleSubmit = (data, { ...res }) => {
    dispatch(signupFetch(data))
    console.log(res)
  }

  return (
    <>
      <Button
        leftIcon={<AddIcon />}
        colorScheme="facebook"
        onClick={onOpen}
        ml="4"
      >
        Criar conta
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        isCentered
      >
        <DrawerOverlay />
        <DrawerContent>
          <Form onSubmit={handleSubmit} id="form-user">
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth="1px" textColor="white" bgColor="green.500" p="5">
              Criar conta
            </DrawerHeader>

            <DrawerBody>
              <Stack spacing="24px">
                <Box>
                  <FormLabel htmlFor="username">Email</FormLabel>
                  <Input
                    as={InputUnform}
                    name="email"
                    id="email"
                  />
                </Box>
                <Box>
                  <FormLabel htmlFor="username">Senha</FormLabel>
                  <Input
                    as={InputUnform}
                    name="password"
                    type="password"
                    id="password"
                  />
                </Box>

                <Box>
                  <FormLabel htmlFor="username">Confirmar senha</FormLabel>
                  <Input
                    as={InputUnform}
                    name="password_confirmation"
                    type="password"
                    id="password_confirmation"
                  />
                </Box>
              </Stack>
            </DrawerBody>

            <DrawerFooter borderTopWidth="1px">
              <Button variant="outline" mr={3} onClick={onClose} colorScheme="red">
                Cancelar
            </Button>
              <Button colorScheme="facebook" type="submit" for="form-user">Cadastrar</Button>
            </DrawerFooter>
          </Form>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Signup
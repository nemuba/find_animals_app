import React, { useEffect, useState } from 'react'
import { Box, Heading } from '@chakra-ui/layout'
import { FormLabel, FormControl } from '@chakra-ui/form-control'
import { Form } from '@unform/web'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '@chakra-ui/button'
import SelectUnform from '../../components/select'
import InputUnform from '../../components/input'
import InputPhoneUnform from '../../components/inputPhone'
import { listAllCategoryFetch } from '../../store/fetch_actions/category'
import { Input } from '@chakra-ui/input'

const AnimalCreate = () => {
  const dispatch = useDispatch()
  const categories = useSelector(state => state.categories)
  const [options, setOptions] = useState([])

  useEffect(() => {
    dispatch(listAllCategoryFetch())
  }, [dispatch])

  useState(() => {
    setOptions(categories.map(category => ({ label: category.description, value: category.id })))
  }, [categories])

  const handleSubmit = (data, { reset }) => {
    console.log(data)
    reset()
  }

  return (
    <Box w="100%" p="5">
      <Heading>Cadastrar Animal</Heading>
      <Form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>Selecione uma categoria de animal</FormLabel>
          <SelectUnform name="category_id" options={options} />
        </FormControl>
        <br />
        <FormControl>
          <FormLabel>Nome do animal</FormLabel>
          <Input as={InputUnform} name="name" type="text" />
        </FormControl>
        <br />
        <FormControl>
          <FormLabel>Descrição do animal</FormLabel>
          <Input as={InputUnform} name="description" type="text" />
        </FormControl>
        <br />
        <FormControl>
          <FormLabel>Nome do Responsável</FormLabel>
          <Input as={InputUnform} name="name_owner" type="text" />
        </FormControl>
        <br />
        <FormControl>
          <FormLabel>Telefone do Responsável</FormLabel>
          <Input as={InputPhoneUnform} name="phone_owner" />
        </FormControl>
        <br />

        <FormControl>
          <Button
            type="submit"
            bg="dark"
            color="white"
            p={4}
            fontWeight="bold"
            bgGradient="linear(to-r, teal.500,green.500)"
            _hover={{
              bgGradient: "linear(to-r, blue.600, green.400)",
            }}
          >
            Cadastrar
          </Button>
        </FormControl>
      </Form>
    </Box>
  )
}

export default AnimalCreate
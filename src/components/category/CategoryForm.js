import React from 'react'
import { useDispatch } from 'react-redux'
import { Form } from '@unform/web'
import InputUnform from '../input'
import { addCategoryFetch } from '../../store/fetch_actions/category'
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input
} from '@chakra-ui/react'

const CategoryForm = () => {
  const dispatch = useDispatch()

  const handleSubmit = (data, { reset }) => {
    dispatch(addCategoryFetch(data))
    reset()
  }

  return (
    <Box p="4">
      <Form onSubmit={handleSubmit}>
        <Heading>Add category</Heading>
        <FormControl>
          <FormLabel>Descrição</FormLabel>
          <Input as={InputUnform}
            type="text"
            name="description"
            id="description"
            placeholder="Enter Category"
          />
        </FormControl>
        <br />
        <FormControl>
          <Button type="submit">Add category </Button>
        </FormControl>
      </Form>
    </Box>
  )
}

export default CategoryForm
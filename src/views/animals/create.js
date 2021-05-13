import React, { useEffect, useRef, useState } from 'react'
import { Box, Heading } from '@chakra-ui/layout'
import { FormLabel, FormControl } from '@chakra-ui/form-control'
import { Form } from '@unform/web'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '@chakra-ui/button'
import SelectUnform from '../../components/select'
import Map from '../../components/map'
import DraggableMarker from '../../components/map/draggableMarker'
import InputUnform from '../../components/input'
import InputPhoneUnform from '../../components/inputPhone'
import { listAllCategoryFetch } from '../../store/fetch_actions/category'
import { Input } from '@chakra-ui/input'
import { Divider } from '@chakra-ui/layout'
import { addAnimalFetch } from '../../store/fetch_actions/animal'

const AnimalCreate = () => {
  const dispatch = useDispatch()
  const categories = useSelector(state => state.categories)
  const location = useSelector(state => state.location)
  const [address, setAddress] = useState(null)
  const map = useSelector(state => state.map)
  const [options, setOptions] = useState([])
  const formRef = useRef(null)

  useEffect(() => {
    dispatch(listAllCategoryFetch())
  }, [dispatch])

  useEffect(() => {
    if (location?.address?.location)
      setAddress(location.address.location)
  }, [location])

  useState(() => {
    if (categories)
    setOptions(categories.map(category => ({ label: category.description, value: category.id })))
  }, [categories])

  useEffect(() => {
    if (address && map.length !== 0)
      formRef.current.setData({
        street: address.street,
        number: address.number,
        neighborhood: address.neighborhood,
        city: address.city,
        country: address.country,
        state: address.state,
        zipcode: address.zipcode,
        latitude: map[0],
        longitude: map[1],
      })
  }, [address, map])

  const handleSubmit = (data, { reset }) => {
    dispatch(addAnimalFetch(data))
  }

  return (
    <Box w="100%" p="5">
      <Heading>Cadastrar Animal</Heading>

      <Form onSubmit={handleSubmit} ref={formRef}>
        <FormControl my="5">
          <Heading size="md" my="5">Selecione a localidade onde animal foi perdido</Heading>
          <Map center={map}>
            <DraggableMarker center={map} />
          </Map>
        </FormControl>
        <FormControl my="5">
          <Input as={InputUnform} name="latitude" type="text" hidden={true} />
        </FormControl>
        <FormControl my="5">
          <Input as={InputUnform} name="longitude" type="text" hidden={true} />
        </FormControl>
        <FormControl my="5">
          <FormLabel>Rua</FormLabel>
          <Input as={InputUnform} name="street" type="text" />
        </FormControl>
        <FormControl my="5">
          <FormLabel>Bairro</FormLabel>
          <Input as={InputUnform} name="neighborhood" type="text" />
        </FormControl>
        <FormControl my="5">
          <FormLabel>Número</FormLabel>
          <Input as={InputUnform} name="number" type="text" />
        </FormControl>
        <FormControl my="5">
          <FormLabel>Cidade</FormLabel>
          <Input as={InputUnform} name="city" type="text" />
        </FormControl>
        <FormControl my="5">
          <FormLabel>Estado</FormLabel>
          <Input as={InputUnform} name="state" type="text" />
        </FormControl>
        <FormControl my="5">
          <FormLabel>País</FormLabel>
          <Input as={InputUnform} name="country" type="text" defaultValue="Brazil" />
        </FormControl>
        <FormControl my="5">
          <FormLabel>Código Postal</FormLabel>
          <Input as={InputUnform} name="zipcode" type="text" />
        </FormControl>
        <Divider border="2px" />
        <Heading my="5">Informações do animal</Heading>
        <FormControl>
          <FormLabel>Selecione a espécie do animal</FormLabel>
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

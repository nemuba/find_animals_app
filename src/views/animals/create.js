import React, { useEffect, useRef, useState } from 'react'
import {
  Box,
  Heading,
  FormLabel,
  FormControl,
  Button,
  Input,
  Divider,
  SimpleGrid,
  Center
} from '@chakra-ui/react'
import { Form } from '@unform/web'
import { useDispatch, useSelector } from 'react-redux'
import SelectUnform from '../../components/select'
import Map from '../../components/map'
import DraggableMarker from '../../components/map/draggableMarker'
import InputUnform from '../../components/input'
import InputPhoneUnform from '../../components/inputPhone'
import { listAllCategoryFetch } from '../../store/fetch_actions/category'
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

  useEffect(() => {
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
      <Form onSubmit={handleSubmit} ref={formRef}>
        <SimpleGrid minChildWidth="500px" spacing="10">
          <Box w="100%">
            <FormControl my="5">
              <Box h="100%">
                <Heading>Mapa</Heading>
                <Heading size="md" my="5">Selecione a localidade onde animal foi perdido</Heading>
                <Map center={map} scrollZoom={true}>
                  <DraggableMarker center={map} />
                </Map>
              </Box>
            </FormControl>
          </Box>
          <Box w="100%" py="5">
            <Heading>Endereço do animal</Heading>
            <Heading size="md" my="5">Informações de localidade do animal</Heading>
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
          </Box>
        </SimpleGrid>
        <Divider border="2px" />
        <Box w="100%">
          <Center>
            <Heading my="5">Informações do animal</Heading>
          </Center>
          <FormControl my="5">
            <FormLabel>Selecione a espécie do animal</FormLabel>
            <SelectUnform name="category_id" options={options} />
          </FormControl>
          <FormControl my="5">
            <FormLabel>Nome do animal</FormLabel>
            <Input as={InputUnform} name="name" type="text" />
          </FormControl>
          <FormControl my="5">
            <FormLabel>Descrição do animal</FormLabel>
            <Input as={InputUnform} name="description" type="text" />
          </FormControl>
          <FormControl my="5">
            <FormLabel>Nome do Responsável</FormLabel>
            <Input as={InputUnform} name="name_owner" type="text" />
          </FormControl>
          <FormControl my="5">
            <FormLabel>Telefone do Responsável</FormLabel>
            <Input as={InputPhoneUnform} name="phone_owner" />
          </FormControl>
          <FormControl my="5">
            <Button
              float="right"
              type="submit"
              bg="dark"
              color="white"
              my="5"
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
        </Box>
      </Form>
    </Box>
  )
}

export default AnimalCreate

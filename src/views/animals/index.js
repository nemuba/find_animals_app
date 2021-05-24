import React, { useEffect, useState } from 'react'
import { Box, Heading, HStack } from '@chakra-ui/layout'
import { useDispatch, useSelector } from 'react-redux'
import { listAllAnimalsFetch, listAnimalsByCategoryFetch } from '../../store/fetch_actions/animal'
import { listAllCategoryFetch } from '../../store/fetch_actions/category'
import { Divider } from '@chakra-ui/layout'
import Map from '../../components/map'
import { Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png'
import { Button } from '@chakra-ui/button'
import { push } from 'connected-react-router'

const markerIcon = L.icon({
  iconUrl: icon,
  iconShadow: iconShadow
})

const FindAnimal = () => {
  const dispatch = useDispatch()
  const animals = useSelector(state => state.animals.animals)
  const animals_by_category = useSelector(state => state.animals.animals_by_category)
  const [search_animal, setSearchAnimal] = useState(false)
  const categories = useSelector(state => state.categories)
  const map = useSelector(state => state.map)
  const [activeAnimal, setActiveAnimal] = useState(null)

  useEffect(() => {
    dispatch(listAllAnimalsFetch())
    dispatch(listAllCategoryFetch())
  }, [dispatch])

  const searchByCategory = (category) => {
    dispatch(listAnimalsByCategoryFetch(category))
    setSearchAnimal(true)
  }

  const handleClearSearch = () => {
    setSearchAnimal(false)
    dispatch(push('/animals'))
  }

  return (
    <Box w="100%" p="5">
      <Heading size="lg">Encontrar Animal</Heading>
      <Heading size="md" mt="3">Animais cadastrados: {animals?.length}</Heading>
      <Heading size="sm" mt="3">Listar por categoria</Heading>
      <HStack alignItems="center">
        {categories && (
          categories.map(category => (
            <Button
              key={category.id}
              my="3"
              variant="outline"
              colorScheme="green"
              size={'sm'}
              onClick={() => searchByCategory(category)}
            >
              {category.description} - ({category.animals.length})
            </Button>
          ))
        )}
        <Button
          my="3"
          variant="outline"
          colorScheme="red"
          size={'sm'}
          onClick={handleClearSearch}
        >
          Limpar busca por categoria
        </Button>
      </HStack>
      <Divider border="2px" my="5" />

      <Map center={map}>
        {search_animal && animals_by_category.length !== 0 ?
          ((animals_by_category.map(animal => (
            <Marker
              key={animal.id}
              position={[animal.latitude, animal.longitude]}
              eventHandlers={{
                click: () => setActiveAnimal(animal)
              }}
              icon={markerIcon}
            />
          ))))
          :
          (animals && (animals.map(animal => (
            <Marker
              key={animal.id}
              position={[animal.latitude, animal.longitude]}
              eventHandlers={{
                click: () => setActiveAnimal(animal)
              }}
              icon={markerIcon}
            />
          ))))
        }
        {
          activeAnimal && (
            <Popup
              position={[activeAnimal.latitude, activeAnimal.longitude]}
              eventHandlers={{
                close: () => setActiveAnimal(null)
              }}
            >
              <Heading size="sm">{activeAnimal.name}</Heading>
              <span><b>Categoria:</b> {activeAnimal.category.description}</span>
              <br />
              <span><b>Descrição:</b> {activeAnimal.description}</span>
              <br />
              <span><b>Nome do Responsável:</b> {activeAnimal.name_owner}</span>
              <br />
              <span><b>Contato:</b> {activeAnimal.phone_owner}</span>

            </Popup>
          )
        }
      </Map>
    </Box>
  )
}

export default FindAnimal

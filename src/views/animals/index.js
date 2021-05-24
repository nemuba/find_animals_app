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
import { getLocation } from '../../store/ducks/map'

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
  const message = "Olá tudo bem? você ja encontrou seu animalzinho?"

  useEffect(() => {
    dispatch(listAllAnimalsFetch())
    dispatch(listAllCategoryFetch())
  }, [dispatch])

  useEffect(() => {
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition(pos => {
        dispatch(getLocation([pos.coords.longitude, pos.coords.latitude]))
      })
  }, [dispatch])

  const searchByCategory = (category) => {
    dispatch(listAnimalsByCategoryFetch(category))
    setSearchAnimal(true)
  }

  const handleClearSearch = () => {
    setSearchAnimal(false)
    dispatch(push('/animals'))
  }

  if (map.length === 0 && !map.includes(i => i === null)) return <h1>loading ...</h1>

  return (
    <Box w="100%" p="5">
      <Heading size="lg">Lista de animais cadastrados</Heading>
      <Heading size="md" mt="3">Total: {animals?.length}</Heading>

      <HStack alignItems="center">
        <Heading size="sm">Listar por categoria: </Heading>
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

      <Map center={map} scrollZoom={true}>
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
          (animals.length !== 0 && (animals.map(animal => (
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
              <span>
                <b>Contato:</b>
                <a
                  href={`https://api.whatsapp.com/send?phone=${activeAnimal.phone_owner}&text=${message}`} target="blank">
                  {activeAnimal.phone_owner}
                </a>
              </span>

            </Popup>
          )
        }
      </Map>
    </Box>
  )
}

export default FindAnimal

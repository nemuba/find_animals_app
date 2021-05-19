import React, { useEffect } from 'react'
import { ConnectedRouter } from 'connected-react-router'
import { history } from './store/store'
import Routes from './routes'

import NavBar from './components/menu'
import { Box } from '@chakra-ui/layout'
import { useDispatch, useSelector } from 'react-redux'
import { getLocation } from './store/ducks/map'

const App = () => {
  const dispatch = useDispatch()
  const map = useSelector(state => state.map)

  useEffect(() => {
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition(pos => {
        dispatch(getLocation([pos.coords.latitude, pos.coords.longitude]))
      })
  }, [dispatch])

  if (map.length === 0) return <h1>loading ...</h1>

  return (
    <React.Fragment>
      <ConnectedRouter history={history}>
        <NavBar />
        <Box w="100%">
          <Routes />
        </Box>
      </ConnectedRouter>
    </React.Fragment>
  )
}

export default App;

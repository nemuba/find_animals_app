import React from 'react'
import { ConnectedRouter } from 'connected-react-router'
import { history } from './store/store'
import Routes from './routes'

import NavBar from './components/menu'
import { Box } from '@chakra-ui/layout'

const App = () => {
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

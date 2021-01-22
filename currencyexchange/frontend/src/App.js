
import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux'
import * as currencyActions from './redux/actions/currency';
import { Container } from '@material-ui/core';
import Navbar from './components/nav/Navbar'
import { ThemeProvider } from '@material-ui/styles'
import {theme} from './theme/theme'

function App(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currencyActions.getCur())
  })

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md">
        <Navbar />
      </Container>
    </ThemeProvider>
  )
}

export default App;

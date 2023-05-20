import React from 'react'
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import 'fontsource-roboto';

import { viteLogo } from './assets/svg'
import { Button } from './components'
import { Container, ThemeProvider, createTheme } from '@mui/material';
import './utils/dropConsole';
import { RouterConfig } from './navigation/routerConfig';

import store from "./redux/store";


const theme = createTheme({})

function App() {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <div className="App">
            <p>Container of the application</p>
            <span>
              <img src={viteLogo} alt='Vite Logo' />
            </span>
            <span>
              <img width='250px' height='250px' src='./images/nike-dunk-low.webp' alt='Nike Dunk Low' />
            </span>
            <Button />
            <div className='bg'></div>
            <Container maxWidth='lg'>
              <BrowserRouter>
                <RouterConfig />
              </BrowserRouter>
            </Container>
          </div>
        </ThemeProvider> 
      </Provider>
    </>
  )
}

export default App

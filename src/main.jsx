import React from 'react'
import ReactDOM from 'react-dom/client'
import { CssBaseline } from "@mui/material";
import App from './App.jsx'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import './index.css'

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
});

import { BrowserRouter } from 'react-router-dom';
import { SnackbarProvider, enqueueSnackbar } from 'notistack';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <SnackbarProvider maxSnack={3} autoHideDuration={2000}>

        <CssBaseline /> {/*Hace lo mismo que normalize, resetea todos los estilos */}
        <App />
      </SnackbarProvider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,

)

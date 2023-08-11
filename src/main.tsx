import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import ReactDOM from 'react-dom/client'

import App from './App.tsx'
import './index.css'

const colorPalette = {
  green: '#4ABA91',
  yellow: '#D4CE46'
}

const theme = extendTheme({colorPalette})

ReactDOM.createRoot(document.getElementById('root')!).render(
    <ChakraProvider theme={theme}>
          <App />
    </ChakraProvider>
)

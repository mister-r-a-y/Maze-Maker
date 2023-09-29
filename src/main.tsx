import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import ReactDOM from 'react-dom/client'

import App from './App.tsx'
import './index.css'

const theme = extendTheme({
  colors: {
    green: '#4ABA91',
    yellow: '#D4CE46',
  },
})

ReactDOM.createRoot(document.getElementById('root')!).render(
    <ChakraProvider theme={theme}>
          <App />
    </ChakraProvider>
)

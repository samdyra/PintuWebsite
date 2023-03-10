import React from 'react'
import {
  Navbar, Badge, Table, Hero 
} from './Components'
import './App.css'
import { QueryClient, QueryClientProvider, } from 'react-query'
import { Provider as CryptoProvider } from './Context/CryptoContext'

const App:React.FC = () => {

  const queryClient = new QueryClient()

  return (
    <CryptoProvider>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <Hero />
        <Badge />
        <Table />
      </QueryClientProvider>
    </CryptoProvider>
  )
}

export default App

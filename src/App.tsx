import React, { useEffect } from 'react'
import {
  Navbar, Badge, Table, Hero 
} from './Components'
import './App.css'
import { QueryClient, QueryClientProvider, } from 'react-query'


const App:React.FC = () => {

  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <Hero />
      <Badge />
      <Table />
    </QueryClientProvider>
  )
}

export default App

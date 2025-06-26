import React from 'react'
import { Router, Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import AllCitiesPage from './pages/AllCitiesPage'
const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/cities' element={<AllCitiesPage/>}/>
      </Route>
    )
  )

  return <RouterProvider router={router} />
  
}

export default App
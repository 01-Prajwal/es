import React from 'react'
import {BrowserRouter ,Route,Routes} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import  SignUp  from './Pages/SignUp'
import  SignIn  from './Pages/SignIn'
import Profile from './Pages/Profile'
import Header from './Components/Header'
import PrivateRoute from './Components/PrivateRoute'
import Listings from './Pages/Listings'
import UpdateListing from './Pages/UpdateListing'
import CreateListings from './Pages/CreateListings'
import Search from './Pages/Search'
export default function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>    
      <Route path='/about' element={<About/>}/>    
      <Route path='/sign-up' element={<SignUp/>}/>    
      <Route path='/sign-in' element={<SignIn/>}/> 
      <Route path='/listing/:id' element={<Listings />} />
      <Route path='search' element={<Search/>}/>
 
      <Route element={<PrivateRoute/>}>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/create-listing' element={<CreateListings/>}/>
        <Route path='/update-listing/:id' element={<UpdateListing/>}/>
      </Route>      
    </Routes>
    
    </BrowserRouter>
  )
}

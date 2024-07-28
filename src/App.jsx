import React, {useState} from 'react'
import './App.css'
import { Routes, Route, Link, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Products from './pages/Products'
import ErrorPage from './pages/Error'
import ProductDetails from './pages/ProductDetails'

function App() {
  const [selectCategory, setSelectCategory] = useState('')
  function handleCategory(e){
    setSelectCategory(e.target.value)
  }
  return (
    <div>
      <header className='header'>
          <NavLink to = '/'>Asosiy sahifa</NavLink>
          <NavLink to = '/about'>About sahifa</NavLink>
          <NavLink to = '/contact'>Contact sahifa</NavLink>
          <NavLink to = '/products'>Products sahifa</NavLink>
          <NavLink to = '/products/:id'>Details sahifa</NavLink>
          <select name="category" id="category" onChange={handleCategory}>
            <option value="средний">средний</option>
            <option value="известный">известный</option>
            <option value="не популярен">не популярен</option>
          </select>
      </header>
      <Routes>
        <Route path='/' element = {<Home></Home>}></Route>
        <Route path='/about' element = {<About></About>}></Route>
        <Route path='/contact' element = {<Contact></Contact>}></Route>
        {/* <Route path='products' element = {<Products></Products>}>
          <Route path=':id' element = {<ProductDetails></ProductDetails>}></Route>
        </Route> */}
        <Route path='/products' element = {<Products></Products>}></Route>
        <Route path='/products/:id' element = {<ProductDetails></ProductDetails>}></Route>

        <Route path='*' element = {<ErrorPage></ErrorPage>}></Route>
      </Routes>
    </div>
  )
}

export default App

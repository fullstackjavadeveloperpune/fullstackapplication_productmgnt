import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ProductList } from './components/ProductList'
import { AddProduct } from './components/AddProduct'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<ProductList />} />
          <Route exact path='/add-product' element={<AddProduct />} />
        </Routes>
      </Router>
    </>
  )
}

export default App

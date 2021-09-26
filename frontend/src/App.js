import React from 'react'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './screens/Home'
import Cart from './screens/Cart'
import { BrowserRouter as Router,Route } from 'react-router-dom'
import ProductDetail from './screens/ProductDetail'
const App = () => {
  return (
    <Router>
      <Header/>
        <main className="py-3">
        <Container>
          <Route exact path="/" component={Home} />
          <Route path="/product/:id" component={ProductDetail}/>
          <Route path="/cart/:id?" component={Cart}/>
        </Container>
        </main>
      <Footer/> 
    </Router>
  )
}

export default App

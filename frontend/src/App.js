import React from 'react'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './screens/Home'
import Cart from './screens/Cart'
import { BrowserRouter as Router,Route } from 'react-router-dom'
import ProductDetail from './screens/ProductDetail'
import Login from './screens/Login'
import Register from './screens/Register'
import Profile from './screens/Profile'
import Shipping from './screens/Shipping'
import Payment from './screens/Payment'
import PlaceOrder from './screens/PlaceOrder'
const App = () => {
  return (
    <Router>
      <Header/>
        <main className="py-3">
        <Container>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/profile" component={Profile} />
          <Route path="/shipping" component={Shipping} />
          <Route path="/payment" component={Payment} />
          <Route path="/place-order" component={PlaceOrder} />
          <Route path="/product/:id" component={ProductDetail}/>
          <Route path="/cart/:id?" component={Cart}/>
        </Container>
        </main>
      <Footer/> 
    </Router>
  )
}

export default App

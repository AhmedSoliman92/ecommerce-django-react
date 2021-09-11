import React from 'react'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/screens/Home'
import { BrowserRouter as Router,Route } from 'react-router-dom'
import ProductDetail from './components/screens/ProductDetail'
const App = () => {
  return (
    <Router>
      <Header/>
        <main className="py-3">
        <Container>
          <Route exact path="/" component={Home} />
          <Route path="/product/:id" component={ProductDetail}/>
        </Container>
        </main>
      <Footer/> 
    </Router>
  )
}

export default App

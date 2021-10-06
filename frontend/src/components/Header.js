import React from 'react'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { LinkContainer   } from 'react-router-bootstrap'
import { useSelector,useDispatch } from 'react-redux'
import { Logout } from '../actions/userActions'
const Header = () => {
    const userLogin= useSelector(state => state.userLogin)
    const {userInfo} = userLogin
    const dispatch = useDispatch()

    const logoutHandler = ()=>{
        dispatch(Logout())
    }
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand>e-commerce</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                        className="mr-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                        >
                            <LinkContainer to="/cart">
                                <Nav.Link ><i className="fas fa-shopping-cart"></i> Cart</Nav.Link>
                            </LinkContainer>

                            {userInfo ? (
                                <NavDropdown title={userInfo.fullName}>
                                    <LinkContainer to='/profile'>
                                        <NavDropdown.Item>Profile</NavDropdown.Item>
                                    </LinkContainer>
                                    <NavDropdown.Item onClick={logoutHandler }>Logout</NavDropdown.Item>
                                </NavDropdown>
                            ):
                            <LinkContainer to="/login">
                                <Nav.Link><i className="fas fa-user"></i>Login</Nav.Link>
                            </LinkContainer>
                            }
                            
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>    
            </Navbar>
        </header>
    )
}

export default Header

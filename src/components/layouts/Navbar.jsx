import Link from 'next/link'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Image from 'next/image'
import { BsGlobe, BsFillBasketFill } from 'react-icons/bs'
import { useSession, signIn, signOut } from 'next-auth/react'
import logo from '../../../public/assets/images/logo.png'
import { useCart } from '../../../context/CartProvider'

export default function CompsLayoutsNavbar({ setCartSliderIsOpen }) {
  const { data: session } = useSession()
  const { items } = useCart()

  return (
    <Navbar className="navbar mt-3" expand="lg">
      <Container>
        <Navbar.Brand as={Link} href="/">
          <Image src={logo} width={70} height={45} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto flex-grow-1 justify-content-evenly">
            <Nav.Link as={Link} href="/"><a className="nav-link d-flex align-items-center"><BsGlobe />&nbsp;&nbsp;EN/CN</a></Nav.Link>
            <Nav.Link as={Link} href="/"><a className="nav-link">HOME</a></Nav.Link>
            <Nav.Link as={Link} href="/menu"><a className="nav-link">MENU</a></Nav.Link>
            <NavDropdown title="PROFILE" id="basic-nav-dropdown" className="">
              <NavDropdown.Item><Nav.Link as={Link} href="/profile"><a className="nav-link">PROFILE</a></Nav.Link></NavDropdown.Item>
              {
              session ? (
                <NavDropdown.Item><Nav.Link onClick={() => signOut({ callbackUrl: '/' })}>Sign Out</Nav.Link></NavDropdown.Item>
              ) : (
                <NavDropdown.Item><Nav.Link onClick={() => signIn()}>SIGN IN</Nav.Link></NavDropdown.Item>
              )
            }
            </NavDropdown>
            <div className="d-flex">
              <button
                type="button"
                className="cartBtn"
                onClick={() => setCartSliderIsOpen((open) => !open)}
              >
                <BsFillBasketFill /> <span>( {items.length} )</span>
              </button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

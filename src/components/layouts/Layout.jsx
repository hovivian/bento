import { useState } from 'react'

import CompsLayoutsNavbar from './Navbar'
import ShoppingCartSlideOver from './ShoppingCart'

const Layout = ({ children }) => {
  const [cartSliderIsOpen, setCartSliderIsOpen] = useState(false)

  return (
    <>
      <CompsLayoutsNavbar setCartSliderIsOpen={setCartSliderIsOpen} />
      <ShoppingCartSlideOver open={cartSliderIsOpen} setCartSliderIsOpen={setCartSliderIsOpen} />
      <main>{children}</main>
    </>
  )
}

export default Layout

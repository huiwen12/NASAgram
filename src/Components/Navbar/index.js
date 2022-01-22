import React from 'react'
import Logo from './Logo'
import { Container, NavLink } from './styles'

const Navbar = () => (
  <Container>
    <NavLink to="/photos">
      <Logo />
    </NavLink>
  </Container>
)

export default Navbar

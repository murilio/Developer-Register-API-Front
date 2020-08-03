import React from 'react'

// icones
import { GrCode } from 'react-icons/gr'

// style
import { Container } from './styles'

const Header = ({ title }) => {
  return (
    <Container>
      <GrCode size={30} />
      <a href="/">{title}</a>
    </Container>
  )
}

export default Header

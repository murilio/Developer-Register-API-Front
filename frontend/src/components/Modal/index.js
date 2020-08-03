import React from 'react'
import { useHistory } from 'react-router-dom'

// icones
import { FiCheckCircle } from 'react-icons/fi'

// style
import { Container } from './styles'

const Modal = () => {

  const history = useHistory()

  setTimeout(() => {
    history.push('/')
  }, 2000);

  return (
    <Container>
      <div className="main">
        <FiCheckCircle size={80} color="00A000" />
        <p>Usuário cadastrado</p>
      </div>
    </Container>
  )
}

export default Modal

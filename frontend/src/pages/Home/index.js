import React from 'react'

// icones
import { FiLogOut } from 'react-icons/fi'

// components
import Header from '../../components/Header'

// style
import { Container } from './styles'

const Home = () => {
  return (
    <>
      <Header title="dev" />
      <Container>
        <div className="left">
          <h1 className="title">
            Você é desenvolvedor ?
          </h1>
          <span className="information">Cadastre o seu currículo em nosso banco de vagas</span>
          <a href="/cadastro">
            <span className="icon">
              <FiLogOut size={20} />
            </span>
            <p>Acessar</p>
          </a>
        </div>
        <div className="right">
          <img src="images/home.png" alt="imagem da home" />
        </div>
      </Container>
    </>
  )
}

export default Home

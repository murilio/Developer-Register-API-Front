import React, { useState, useEffect } from 'react'

// icones
import { FiDownload } from 'react-icons/fi'

// components
import Header from '../../components/Header'

// api
import api from '../../services/api'

// style
import { Container } from './styles'

const Admin = () => {

  const [ devs, setDevs ] = useState([])
  
  async function loadDevs() {
    try {
      const res = await api.get('/api/dev')
      setDevs(res.data)
    } catch (error) {
      console.log('erro em buscar os dados');
    }
  }

  useEffect(() => {
    loadDevs()
  }, [])

  return(
    <>
      <Header title="Admin" />
      <Container>
        <h1>Desenvolvedores cadastrados</h1>
        {devs.map(dev => (
          <div className="card" key={dev.id}>
            <div className="item">
              <span>Nome</span>
              <p>{dev.name}</p>
            </div>
            <div className="item">
              <span>E-mail</span>
              <p>{dev.email}</p>
            </div>
            <div className="item">
              <span>Data de nascimento</span>
              <p>{dev.data_nascimento}</p>
            </div>
            <div className="item">
              <span>Curriculo</span>
              <p className="file">
                <a 
                  href={`data:application/pdf;base64,${dev.file}`} 
                  download={`curriculo_${dev.name}`} 
                >
                  <FiDownload size={25}/>
                </a>
              </p>
            </div>
          </div>
        )) }
      </Container>
    </>
  )
}

export default Admin

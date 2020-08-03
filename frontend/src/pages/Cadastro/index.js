import React, { useState } from 'react'

// components
import Header from '../../components/Header'
import Modal from '../../components/Modal'

// icones
import { FiPlus } from 'react-icons/fi'

// api 
import api from '../../services/api'

// style
import { Container } from './styles'

const Cadastro = () => {

  // inputs
  const [ name, setName ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ data_nascimento, setDataNascimento ] = useState('')
  const [ file, setFile ] = useState('')
  const [ modal, setModal ] = useState(false)

  function handleFileSelect(evt) {
    var f = evt.target.files[0];
    if(!f) {
      return console.log('Sem arquivo selecionado')
    }
    var reader = new FileReader();
    reader.onload = (function(theFile) {
      return function(e) {
        var binaryData = e.target.result;
        var base64String = window.btoa(binaryData);
        setFile(base64String)
      };
    })(f);
    reader.readAsBinaryString(f);
  }

  async function handleSubmit(e) {

    e.preventDefault()

    if(!file) {
      return
    }

    const data = {
      name,
      email, 
      data_nascimento,
      file
    }
    
    try {
      await api.post('/api/dev', data)
      setModal(true)
    } catch (error) {
      console.log(error)
    }

  }

  return(
    <>
      <Header title="Cadastrar" />
      <Container>
        <h1 className="title">Realize o seu cadastro</h1>
        <form onSubmit={handleSubmit}>
          <h3>Dados</h3>
          <div className="form_inputs">
            <div className="input_group">
              <label htmlFor="name">Nome</label>
              <input 
                id="name" 
                type="text" 
                required
                placeholder="ex: Murilio" 
                autoComplete="off" 
                onChange={(e) => setName(e.target.value)} 
                className={ name ? 'file' : 'not_found' }
              />
            </div>

            <div className="input_group">
              <label htmlFor="email">E-mail</label>
              <input 
                id="email" 
                type="email" 
                required
                placeholder="ex: murilio@gmail.com" 
                autoComplete="off" 
                onChange={(e) => setEmail(e.target.value)} 
                className={ email ? 'file' : 'not_found' }
              />
            </div>

            <div className="input_group">
              <label htmlFor="data_nascimento">Data de nascimento</label>
              <input 
                id="data_nascimento" 
                type="date" 
                required
                onChange={(e) => setDataNascimento(e.target.value)}
                className={ data_nascimento ? 'file' : 'not_found' }
              />
            </div>
          </div>
          <h3>Curriculo</h3> 
          <div className="form_file">
            <label 
              htmlFor="file"
              className={ file ? 'file' : 'not_found' }
            >
              <span>Insira seu Curriculo</span>
              <img src="images/upload.png" alt="iamgem de upload" />
              {file ? 'Arquivo anexado' : null}
            </label>
            <input 
              id="file"
              type="file" 
              onChange={handleFileSelect}
              accept="application/pdf"
              title="Apenas arquivo .pdf"
            />
          </div>
          <button type="submit">
            <span className="icon">
              <FiPlus size={20} />
            </span>
            <p>Cadastrar</p>
          </button>
        </form>
      </Container>
      { modal ? <Modal /> : null }
    </>
  )
}

export default Cadastro

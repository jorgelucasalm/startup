import { Button, Modal, ModalHeader, ModalBody, ModalFooter, ModalTitle } from 'react-bootstrap'
import React, { useEffect, useState } from 'react'
import Forms from '../Forms'
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import { atualizarFuncionario, criarFuncionario } from '../../../../service/serviceFuncionario'

const ModalFormFunc = ({ showModal, setShowModal, setUpdateList, dados, setDados, linguagem, setLinguagem, idFunc }) => {
  const [nome, setNome] = useState('')
  const [genero, setGenero] = useState('')
  const [dataNasc, setDataNasc] = useState('')
  const [email, setEmail] = useState('')
  const [idf, setIdf] = useState()
  const [msg, setMsg] = useState('Adicionar nova Startup')
  const [newLinguagem, setNewLinguagem] = useState([])
  const { id } = useParams()

  const validation = () => {
    if (nome !== '' && genero !== '' && dataNasc !== '' && email !== '') {
      if (dados) {
        const data = {
          id: idf,
          nome,
          genero,
          data_nascimento: dataNasc,
          email
        }
        console.log('data', data, "Linguagens", linguagem)
        // atualizarFuncionario(data)
        setShowModal(false)
        setUpdateList(true)
        setNome('')
        setGenero('')
        setDataNasc('')
        setEmail('')
      } else {
        const data = {
          id_s: parseInt(id),
          nome,
          genero,
          data_nascimento: dataNasc,
          email,
        }
        // console.log(linguagem.id_linguagem, linguagem)
        // adicionarLinguagemProgramador(linguagem)
        criarFuncionario(data)
        setShowModal(false)
        setUpdateList(true)
        setNome('')
        setGenero('')
        setDataNasc('')
        setEmail('')
        setNewLinguagem([])
      }
    }
  }

  useEffect(() => {
    if (dados) {
      setIdf(dados.id)
      setNome(dados.nome)
      setGenero(dados.genero)
      setDataNasc(dados.data_nascimento)
      setEmail(dados.email)
      setMsg('Editar ' + dados.nome)
    }
  }, [dados])

  return (
    <Modal show={showModal} onHide={() => {
      setShowModal(false)
      setNome('')
      setGenero('')
      setDataNasc('')
      setEmail('')
      setLinguagem([])
      setMsg('Adicionar nova Startup')
    }}>
      <ModalHeader closeButton>
        <ModalTitle>{msg}</ModalTitle>
      </ModalHeader>
      <ModalBody>
        <Forms
          nome={nome}
          genero={genero}
          dataNasc={dataNasc}
          email={email}
          setNome={setNome}
          setGenero={setGenero}
          setDataNasc={setDataNasc}
          setEmail={setEmail}
          linguagem={linguagem}
          setLinguagem={setLinguagem}
        />
      </ModalBody>
      <ModalFooter>
        <Button variant='danger' onClick={() => {
          setShowModal(false)
          setNome('')
          setGenero('')
          setDataNasc('')
          setEmail('')
          setLinguagem([])
          setMsg('Adicionar nova Startup')
        }}>
          Cancelar
        </Button>
        <Button variant='primary' onClick={validation}>
          {msg === "Adicionar nova Startup" ? 'Criar' : 'Salvar'}
        </Button>
      </ModalFooter>
    </Modal>
  )
}

export default ModalFormFunc
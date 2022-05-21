import { Button, Modal, ModalHeader, ModalBody, ModalFooter, ModalTitle } from 'react-bootstrap'
import React, { useEffect, useState } from 'react'
import Forms from '../Forms'
import { atualizarStartup, criarStartup } from '../../../../service/serviceStartup'

const ModalFormFunc = ({ showModal, setShowModal, setUpdateList, dados, setDados }) => {
  const [nome, setNome] = useState('')
  const [sede, setSede] = useState('')
  const [genero, setGenero] = useState('')
  const [dataNasc, setDataNasc] = useState('')
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState('Adicionar nova Startup')
  const [id, setId] = useState(undefined)

  const validation = () => {
    if (nome !== '' && genero !== '' && dataNasc !== '' && email !== '') {
      if (dados) {
        const data = {
          id,
          nome,
          genero,
          data_nascimento: dataNasc,
          email
        }
        console.log(data)
        // atualizarStartup(data)
        // setShowModal(false)
        // setUpdateList(true)
        // setNome('')
        // setSede('')
      } else {
        const data = {
          id,
          nome,
          genero,
          data_nascimento: dataNasc,
          email
        }
        console.log(data)
        // setShowModal(false)
        // setUpdateList(true)
        // setId('')
        // setNome('')
        // setGenero('')
        // setDataNasc('')
        // setEmail('')
      }
    }
  }

  useEffect(() => {
    if (dados) {
      setId(dados.id)
      setNome(dados.nome)
      setGenero(dados.genero)
      setDataNasc(dados.data_nascimento)
      setEmail(dados.email)
      setMsg('Editar startup ' + dados.nome)
    }
  }, [dados])

  return (
    <Modal show={showModal} onHide={() => {
      setShowModal(false)
      setId('')
      setNome('')
      setGenero('')
      setDataNasc('')
      setEmail('')
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
          setEmail={setEmail} />
      </ModalBody>
    </Modal>
  )
}

export default ModalFormFunc
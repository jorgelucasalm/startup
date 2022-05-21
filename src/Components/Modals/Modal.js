import { Button, Modal, ModalHeader, ModalBody, ModalFooter, ModalTitle, Form, FormLabel, FormControl, FormGroup } from 'react-bootstrap'
import React, { Component, useEffect, useState } from 'react'
import Forms from '../Forms'
import { atualizarStartup, criarStartup } from '../../service/serviceStartup'

const ModalForm = ({ showModal, setShowModal, setUpdateList, dados, setDados }) => {
  const [nome, setNome] = useState('')
  const [sede, setSede] = useState('')
  const [msg, setMsg] = useState('Adicionar nova Startup')
  const [id, setId] = useState(undefined)

  const validation = () => {
    if (nome !== '' && sede !== '') {
      if (dados) {
        const data = {
          id: id,
          nome: nome,
          sede: sede
        }
        atualizarStartup(data)
        setShowModal(false)
        setUpdateList(true)
        setNome('')
        setSede('')
      } else {
        const data = {
          nome: nome,
          sede: sede
        }
        criarStartup(data)
        setShowModal(false)
        setUpdateList(true)
        setNome('')
        setSede('')
      }
    }
  }

  useEffect(() => {
    if (dados) {
      setId(dados.id)
      setNome(dados.nome)
      setSede(dados.sede)
      setMsg('Editar startup ' + dados.nome)
    }
  }, [dados])

  return (
    <Modal show={showModal} onHide={() => {
      setShowModal(false)
      setNome('')
      setSede('')
      setMsg('Adicionar nova Startup')
    }}>
      <ModalHeader closeButton>
        <ModalTitle>{msg}</ModalTitle>
      </ModalHeader>
      <ModalBody>
        <Forms nome={nome} sede={sede} setNome={setNome} setSede={setSede} />
      </ModalBody>
      <ModalFooter>
        <Button variant='danger' onClick={() => {
          setShowModal(false)
          setNome('')
          setSede('')
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

export default ModalForm
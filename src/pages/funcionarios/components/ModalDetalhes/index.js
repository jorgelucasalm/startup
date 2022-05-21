import { Button, Modal, ModalHeader, ModalBody, ModalFooter, ModalTitle } from 'react-bootstrap'
import React, { useEffect, useState } from 'react'
import Forms from '../Forms'
import { atualizarStartup, criarStartup } from '../../../../service/serviceStartup'

const ModalDetalhes = ({ showModal, setShowModal, setUpdateList, dados, setDados, linguagem, setLinguagem }) => {
  const [nome, setNome] = useState('')
  const [genero, setGenero] = useState('')
  const [dataNasc, setDataNasc] = useState('')
  const [email, setEmail] = useState('')
  const [id, setId] = useState(undefined)

  const handleDate = (data) => {
    const y = data.substring(0, 4)
    const m = data.substring(5, 7)
    const d = data.substring(8, 10)
    // const newData = d + "/" + m + "/" + y
    const newData = y + "-" + m + "-" + d
    return newData
  }

  useEffect(() => {
    if (dados) {
      setId(dados[0].id)
      setNome(dados[0].nome)
      setGenero(dados[0].genero)
      setDataNasc(handleDate(dados[0].data_nascimento))
      setEmail(dados[0].email)
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
    }}>
      <ModalHeader closeButton>
        <ModalTitle>{'Detalhes'}</ModalTitle>
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
          disabled={true} />
      </ModalBody>
    </Modal>
  )
}

export default ModalDetalhes
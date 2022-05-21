import { Button, Modal, ModalHeader, ModalBody, ModalFooter, ModalTitle, Form, FormLabel, FormControl, FormGroup } from 'react-bootstrap'
import React, { Component, useState } from 'react'
import Forms from '../Forms'
import { criarStartup, removerStartup } from '../../service/serviceStartup'

const Alert = ({ showModal, setShowModal, id, setUpdateList }) => {

  const remove = () => {
    removerStartup(id)
    setShowModal(false)
    setUpdateList(true)
  }

  return (
    <Modal show={showModal} onHide={() => setShowModal(false)}>
      <ModalHeader closeButton>
        <ModalTitle>Deseja remover a Startup tal?</ModalTitle>
      </ModalHeader>
      <ModalFooter>
        <Button variant="primary" onClick={() => setShowModal(false)}>
          Cancelar
        </Button>
        <Button variant="danger" onClick={remove}>
          Remover
        </Button>
      </ModalFooter>
    </Modal>
  )
}

export default Alert
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, ModalTitle, Form, FormLabel, FormControl, FormGroup } from 'react-bootstrap'
import React, { Component, useState } from 'react'
import Forms from '../Forms'
import { removerStartup } from '../../service/serviceStartup'
import { removerFuncionario } from '../../service/serviceFuncionario'

const Alert = ({ setModalPrev, text, showModal, setShowModal, id, setUpdateList, isFunc, isRemove }) => {

  const remove = () => {
    if (isFunc) {
      removerFuncionario(id)
      setShowModal(false)
      setUpdateList(true)
    } else {
      removerStartup(id)
      setShowModal(false)
      setUpdateList(true)
    }
  }

  return (
    <Modal show={showModal} onHide={() => setShowModal(false)} id="alert">
      <ModalHeader closeButton>
        <ModalTitle>{text}</ModalTitle>
      </ModalHeader>
      {isRemove ? <ModalFooter>
        <Button variant="primary" onClick={() => {
          setShowModal(false)
          setModalPrev(true)
        }}>
          Cancelar
        </Button>
        <Button variant="danger" onClick={remove}>
          Remover
        </Button>
      </ModalFooter> :
        <ModalFooter>
          <Button variant="primary" onClick={() => {
            setShowModal(false)
            setModalPrev(true)
          }}>
            Ok
          </Button>
        </ModalFooter>}
    </Modal>
  )
}

export default Alert
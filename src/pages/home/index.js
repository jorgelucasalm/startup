import { Table } from 'react-bootstrap'
import { useEffect, useState } from 'react';
import { listarStartup } from '../../service/serviceStartup';
import { Link } from 'react-router-dom';
import ModalForm from '../../Components/Modals/Modal';
import Alert from '../../Components/Alert/Modal';

function Home() {
  const [statups, setStartups] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [showAlert, setShowAlert] = useState(false)
  const [updateList, setUpdateList] = useState(false)
  const [id, setId] = useState(false)
  const [dados, setDados] = useState(undefined)

  useEffect(() => {
    listarStartup((res) => {
      setStartups(res)
      setUpdateList(false)
    })
  }, [updateList])

  const editar = (id, nome, sede) => {
    const dados = {
      id: id,
      nome: nome,
      sede: sede
    }
    setDados(dados, setShowModal(true))

  }

  return (
    <div className="container">
      <header className="d-flex justify-content-between align-items-center">
        <h1 className='my-3'>Listagem de Startup's</h1>
        <div>
          <button type="button" className="btn btn-primary" onClick={() => setShowModal(true)}>+</button>
        </div>
      </header >
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th className="w-25" >Sede</th>
            <th className="w-25" >Funcionarios</th>
            <th className="w-25" >Detalhes</th>
          </tr>
        </thead>
        <tbody>
          {statups.map((item) => {
            var func = []
            if (item.nome_programadores)
              func = item.nome_programadores.split(",")
            console.log(func)
            return <tr>
              <td>{item.id_startup}</td>
              <td>{item.nome_startup}</td>
              <td>{item.cidade_sede}</td>
              <td className='gap'>{func !== [] ? func.map((item) => { return <span className='chip home'>{item}</span> }) : ''}</td>
              <td className='d-flex justify-content-center'>
                <Link to={"/startup/" + item.id_startup} state={item.nome_startup}>
                  <button type="button" class="btn btn-primary">Detalhes</button>
                </Link>
                <button type="button" className="btn btn-warning mx-2" onClick={() => editar(item.id_startup, item.nome_startup, item.cidade_sede)}>Alterar</button>
                <button type="button" className="btn btn-danger" onClick={() => {
                  setShowAlert(true)
                  setId(item.id_startup)
                }}>Excluir</button>
              </td>
            </tr>
          })}
        </tbody>
      </Table>
      <ModalForm dados={dados} setDados={setDados} showModal={showModal} setShowModal={setShowModal} setUpdateList={setUpdateList} />
      <Alert isRemove={true} showModal={showAlert} text={'Deseja remover a Startup?'} setShowModal={setShowAlert} setUpdateList={setUpdateList} id={id}></Alert>
    </div >
  );
}

export default Home;

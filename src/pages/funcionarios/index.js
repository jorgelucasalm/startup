import { Table } from 'react-bootstrap'
import { useEffect, useState } from 'react';
import { consultarStartup } from '../../service/serviceStartup';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import { consultarFuncionario } from '../../service/serviceFuncionario';
import ModalFormFunc from './components/Modals';

function Home() {
  const [funcionarios, setFuncionarios] = useState([])
  const { id } = useParams()
  const history = useNavigate();
  const location = useLocation()
  const [dados, setDados] = useState()
  const [showModal, setShowModal] = useState(false)
  const [updateList, setUpdateList] = useState(false)

  useEffect(() => {
    consultarStartup(id, (res) => {
      setFuncionarios(res)
      setUpdateList(false)
    })
  }, [updateList])

  const details = (id) => {
    consultarFuncionario(id, (res) => { setDados(res) })
    setShowModal(true)
  }

  const handleDate = (data) => {
    const y = data.substring(0, 4)
    const m = data.substring(5, 7)
    const d = data.substring(8, 10)
    // const newData = d + "/" + m + "/" + y
    const newData = y + "-" + m + "-" + d
    return newData
  }

  const editar = (id, nome, genero, data_nascimento, email) => {
    const dados = {
      id,
      nome,
      genero,
      data_nascimento: handleDate(data_nascimento),
      email
    }
    setDados(dados, setShowModal(true))
  }

  return (
    <div className="container">
      <button type="button" class="btn btn-primary mt-3" onClick={() => history("/")}>Voltar</button>
      <header className="d-flex justify-content-between align-items-center">
        <h1 className='my-3'>Funcionarios da {location.state}</h1>
        <div>
          <button type="button" class="btn btn-primary" onClick={() => setShowModal(true)}>+</button>
        </div>
      </header>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Genero</th>
            <th>Data de Nascimento</th>
            <th>Email</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {funcionarios.map((item) => {
            return <tr>
              <td>{item.id_programador}</td>
              <td>{item.nome_programador}</td>
              <td>{item.genero}</td>
              <td>{handleDate(item.data_nascimento)}</td>
              <td>{item.email}</td>
              <td className='d-flex justify-content-center'>
                <button type="button" class="btn btn-primary" onClick={() => details(item.id_programador)}>Detalhes</button>
                <button type="button" className="btn btn-warning mx-2" onClick={() => editar(item.id_programador, item.nome_programador, item.genero, item.data_nascimento, item.email)}>Alterar</button>
                <button type="button" class="btn btn-danger">Excluir</button>
              </td>
            </tr>
          })}
        </tbody>
      </Table>
      <ModalFormFunc showModal={showModal} setShowModal={setShowModal} setUpdateList={setUpdateList} dados={dados} setDados={setDados} ></ModalFormFunc>
    </div>
  );
}

export default Home;

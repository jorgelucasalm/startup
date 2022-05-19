import { Table } from 'react-bootstrap'
import { useEffect, useState } from 'react';
import { listarStartup } from '../../service/serviceStartup';
import { Link } from 'react-router-dom';

function Home() {
  const [statups, setStartups] = useState([])

  useEffect(() => {
    listarStartup((res) => {
      setStartups(res)
    })
  }, [])

  console.log(statups)

  return (
    <div className="container">
      <h1 className='my-3'>Listagem de Startup's</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th class="w-25" >Sede</th>
            <th class="w-25" >Detalhes</th>
          </tr>
        </thead>
        <tbody>
          {statups.map((item) => {
            return <tr>
              <td>{item.id_startup}</td>
              <td>{item.nome_startup}</td>
              <td>{item.cidade_sede}</td>
              <td className='d-flex justify-content-center'>
                <Link to={"/startup/" + item.id_startup} state={item.nome_startup}>
                  <button type="button" class="btn btn-primary">Detalhes</button>
                </Link>
                <button type="button" class="btn btn-warning mx-2">Alterar</button>
                <button type="button" class="btn btn-danger">Excluir</button>
              </td>
            </tr>
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default Home;

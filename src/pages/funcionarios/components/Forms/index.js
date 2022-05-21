import { useEffect, useState } from 'react';
import { Form, FormLabel, FormControl, FormGroup, FormSelect } from 'react-bootstrap'
import { getAllLinguagem } from '../../../../service/serviceFuncionario';

const FormsFunc = ({ nome, setNome, genero, setGenero, dataNasc, setDataNasc, email, setEmail, disabled, linguagem, setLinguagem }) => {
  const [ling, setLing] = useState('')
  const [allLing, setAllLing] = useState([])

  useEffect(() => {
    getAllLinguagem((res) => {
      setAllLing(res)
      setLing(res[0].nome_linguagem)
    })
  }, [])

  return (<Form>
    <FormGroup className="mb-3" controlId="name-f">
      <FormLabel>Nome</FormLabel>
      <FormControl disabled={disabled} value={nome} type="text" placeholder="Nome Funcionario" onChange={(e) => setNome(e.target.value)} />
    </FormGroup>
    <FormGroup disabled={disabled} className="mb-3" controlId="genero">
      <FormLabel>Genero</FormLabel>
      <FormControl disabled={disabled} value={genero} type="text" placeholder="Informe o genero" onChange={(e) => setGenero(e.target.value)} />
    </FormGroup>
    <FormGroup disabled={disabled} className="mb-3" controlId="dNascimento">
      <FormLabel>Data de Nascimento</FormLabel>
      <FormControl disabled={disabled} value={dataNasc} type="date" placeholder="Informe a data" onChange={(e) => setDataNasc(e.target.value)} />
    </FormGroup>
    <FormGroup className="mb-3" controlId="email">
      <FormLabel>Email</FormLabel>
      <FormControl disabled={disabled} value={email} type="email" placeholder="Informe o email" onChange={(e) => setEmail(e.target.value)} />
    </FormGroup>
    <FormGroup className="mb-3" controlId="email">
      <FormLabel>Linguagem</FormLabel>
      {disabled === undefined &&
        <>
          <FormSelect type="email" placeholder="Informe o email" onChange={e => setLing(e.target.value)}>
            {allLing.map((item) => { return <option value={item.nome_linguagem}>{item.nome_linguagem}</option> })}
          </FormSelect>
          <div>
            <button className='btn btn-primary my-3 h-100 w-100' onClick={(e) => {
              e.preventDefault()
              console.log(ling)
              const filter = linguagem.find(element => element === ling);
              if (filter === undefined)
                setLinguagem(linguagem => [...linguagem, ling])
              console.log(linguagem)
            }}>+</button>
          </div>
        </>}
    </FormGroup>
    <div className='display-flex my-3'>
      {linguagem && linguagem.map((item) => {
        return <span className="chip mb-2">{item}<i role="button" class="bi bi-x ms-2 " onClick={(e) => { }}></i></span>
      })}
    </div>
  </Form >
  );
}

export default FormsFunc;

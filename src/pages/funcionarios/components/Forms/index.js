import { Form, FormLabel, FormControl, FormGroup } from 'react-bootstrap'

const FormsFunc = ({ nome, setNome, genero, setGenero, dataNasc, setDataNasc, email, setEmail, disabled }) => {
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
  </Form>
  );
}

export default FormsFunc;

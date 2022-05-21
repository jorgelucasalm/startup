import { Form, FormLabel, FormControl, FormGroup } from 'react-bootstrap'

const Forms = ({ setNome, setSede, nome, sede }) => {
  return (<Form>
    <FormGroup className="mb-3" controlId="name-s">
      <FormLabel>Nome</FormLabel>
      <FormControl value={nome} type="text" placeholder="Nome Startup" onChange={(e) => setNome(e.target.value)} />
    </FormGroup>
    <FormGroup className="mb-3" controlId="sede">
      <FormLabel>Sede</FormLabel>
      <FormControl value={sede} type="text" placeholder="Sede" onChange={(e) => setSede(e.target.value)} />
    </FormGroup>
  </Form>
  );
}

export default Forms;

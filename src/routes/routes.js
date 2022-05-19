import { BrowserRouter as Router, Route, Routes as Switch } from 'react-router-dom';
import Home from '../pages/home'
import Funcionarios from '../pages/funcionarios'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" element={<Home />} />
        <Route path="/startup/:id" element={<Funcionarios />} />
      </Switch>
    </Router>)
}


export default Routes
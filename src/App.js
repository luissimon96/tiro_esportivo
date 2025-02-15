import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import CadastroNovoCliente from './pages/CadastroNovoCliente';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/sobre" component={Sobre} />
        <Route path="/cadastroNovoCliente" component={CadastroNovoCliente} />
      </Switch>
    </Router>
  );
}

export default App;

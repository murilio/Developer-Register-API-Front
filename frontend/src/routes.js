import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// pages
import Home from './pages/Home'
import Cadastro from './pages/Cadastro'
import Admin from './pages/Admin'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route path="/cadastro" component={ Cadastro } />
      <Route path="/admin" component={ Admin } />
      <Route path="*" component={() => <h1>Page Not Found</h1>} />
    </Switch>
  </BrowserRouter>
)

export default Routes

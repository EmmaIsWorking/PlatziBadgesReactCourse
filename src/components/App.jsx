import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from '../components/Layout';
import HomePage from '../pages/HomePage'
import NotFound from '../pages/NotFound';
import Badges from '../pages/Badges';
import BadgeNew from '../pages/BadgeNew';

function App(){
  return(
    <BrowserRouter>
      <Layout>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/badges" component={Badges} />
        <Route exact path="/badges/new" component={BadgeNew} />
        <Route component= {NotFound} />
      </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App
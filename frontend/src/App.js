import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import Home from './pages/Home/Home';
import Layout from './hoc/Layout/Layout';

function App() {

  let routes = (
    <Switch>
      <Route path="/" component={Home}/>
      <Redirect to='/'/>
    </Switch>
  );

  return (
    <Layout>
        {routes}
    </Layout>
  );
}

export default App;

import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

import Home from './pages/Home/Home';
import Layout from './hoc/Layout/Layout';
import Page1 from './pages/QuestionPages/Page1/Page1';
import Page2 from './pages/QuestionPages/Page2/Page2';
import Page3 from './pages/QuestionPages/Page3/Page3';

function App() {

  let routes = (
    <Switch>
      <Route path="/page1" component={Page1}/>
      <Route path="/page2" component={Page2}/>
      <Route path="/page3" component={Page3}/>
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

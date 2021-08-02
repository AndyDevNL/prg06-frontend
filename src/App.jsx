import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './styles/main.scss';

import GetProjects from './components/getAll';
import getSingle from './components/getSingle';
import CreateProject from './components/create';
import UpdateProject from './components/update';
import DeleteProject from './components/delete';
import CannotFind from './components/404';
import Navbar from './components/nav';

function App() {
  return (
    <Router>
      <Navbar/>
      <div className="App">
        <div className="container">
          <h1>Project Manager</h1>
          {/* <GetProjects />
          <CreateProject />
          <UpdateProject /> */}
          <Switch>
            <Route path="/projects/create" component={CreateProject}/>
            <Route path="/projects/:id/update" component={UpdateProject}/>
            <Route path="/projects/:id/single" component={getSingle}/>
            <Route path="/projects/:id/delete" component={DeleteProject}/>
            <Route path="/404" component={CannotFind}/>
            <Route path="/" component={GetProjects}/>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

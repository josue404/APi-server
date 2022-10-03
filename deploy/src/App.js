import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import { Stores } from "./components/Stores";
import { Navbar } from "./components/Navbar";

function App() {
  return (
     <Router>
      <Navbar/>
      <div className="container p-3">
        <Switch>
          <Route path="/" component={Stores}/>
        </Switch>
      </div>
     </Router>
  );
}

export default App;

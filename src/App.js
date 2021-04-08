import React from 'react'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Teams from './pages/Teams';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const App = () => {
  return (
    <div>
        <Router>
          <Route path="/" exact component={Home} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/teams" exact component={Teams} />
      </Router>
    </div>
  )
}

export default App

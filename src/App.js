import React from 'react'
import Home from './pages/Home'
import Contact from './pages/Contact'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const App = () => {
  return (
    <div>
        <Router>
          <Route path="/" exact component={Home} />
          <Route path="/contact" exact component={Contact} />
      </Router>
    </div>
  )
}

export default App

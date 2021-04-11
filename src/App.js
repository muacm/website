import React from 'react'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Newpage from './pages/Newpage'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Blogs from './pages/Blogs';
import Events from './pages/Events';
import Teams2 from './pages/Teams2';
const App = () => {
  return (
    <div>
        <Router>
          <Route path="/" exact component={Newpage} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/old" exact component={Home} />
          <Route path="/blogs" exact component={Blogs} />
          <Route path="/event" exact component={Events} />
          <Route path="/teams" exact component={Teams2} />
      </Router>
    </div>
  )
}

export default App

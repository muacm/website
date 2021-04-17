import React from "react";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Newpage from "./pages/Newpage";
import { Switch, Route } from "react-router-dom";
import Blogs from "./pages/Blogs";
import Events from "./pages/Events";
import Teams2 from "./pages/Teams2";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      {/* <div className="row m-0">
        <div className="col-12"> */}
          <Switch>
            <Route path="/" exact component={Newpage} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/old" exact component={Home} />
            <Route path="/blogs" exact component={Blogs} />
            <Route path="/event" exact component={Events} />
            <Route path="/teams" exact component={Teams2} />
          </Switch>
        {/* </div>
      </div> */}
      <Footer />
    </>
  );
};

export default App;

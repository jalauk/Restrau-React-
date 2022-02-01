import React, { useEffect, useState } from "react";
import Login from "./components/Login";
import Home from "./components/Home";
import Nav from "./components/Navbar";
import { auth } from "./components/firebase";
import "./App.css";
import Contact from "./components/Contact";
import Breakfast from "./components/Breakfast";
import ViewMore from "./components/ViewMore";
import Footer from "./components/Footer";
import Dinner from "./components/Dinner";
import Lunch from "./components/Lunch";
import Front from "./components/Front";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import Search from "./components/Search";

const App = () => {
  const [choose, setChoose] = useState("Chiken");
  const [user, setUser] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) setUser(user);
      else setUser(null);
    });
  }, []);

  return (
    <BrowserRouter>
      <>
        <Nav user={user} />
        <Switch>
          <Route exact path="/" component={Front} />
          <Route exact path="/home">
            <Home setChoose={setChoose} />
          </Route>
          <Route exact path="/breakfast">
            <Breakfast setChoose={setChoose} />
          </Route>
          <Route exact path="/lunch">
            <Lunch setChoose={setChoose} />
          </Route>
          <Route exact path="/dinner">
            <Dinner setChoose={setChoose} />
          </Route>
          <Route exact path="/view">
            <ViewMore choose={choose} />
          </Route>
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/search" component={Search} />
        </Switch>
      </>
      <Footer />
    </BrowserRouter>
  );
};

export default App;

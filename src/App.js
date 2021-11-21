import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import './App.css';
import DashboardNav from './Components/Dashboard/DashboardNav';
import LandingPage from './Components/LandingPage';



function App() {

  const auth = useSelector((state) => state.auth.auth)

  const [isLoggedIn, setIsloggedIn] = useState(false)
  const [showModalLogin, setShowModalLogin] = useState(false)

  const showModal = () => {
    setShowModalLogin(true)
  }
  const hideModal = () => {
    setShowModalLogin(false)
  }

  return (
    <Router>

      <Switch>
        <Route path="/" exact>
          <LandingPage showModal={showModal} hideModal={hideModal} showModalLogin={showModalLogin} isLoggedIn={isLoggedIn} setIsloggedIn={setIsloggedIn} />
        </Route>
        <Route path="/dashboard">
          {auth && <DashboardNav />}
        </Route>
      </Switch>

    </Router>

  );
}

export default App;

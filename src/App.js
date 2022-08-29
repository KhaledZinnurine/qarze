import './App.css';
import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";
import Home from './Components/HomePage/Home/Home';
import Header from './Components/HomePage/Header/Header';
import Navbar from './Components/HomePage/Navbar/Navbar';
import Footer from './Components/HomePage/Footer/Footer';
import BloodDonation from "./Components/BloodDonation/BloodDonation";
import RegistrationForm from './Components/RegistrationForm/RegistrationForm';
export const UserContext = createContext();

function App() {
  const [user, setUser] = useState({});
  return (
    <UserContext.Provider value={[user, setUser]}>
      <Router>
        <Header></Header>
        <Navbar></Navbar>
        <Routes>
          <Route exact path="/" element={<RegistrationForm />} />
          <Route path="/home" element={<Home />} />
        </Routes>


        <Footer></Footer>
      </Router>

    </UserContext.Provider>

  );
};

export default App;

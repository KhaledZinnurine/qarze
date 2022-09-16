import './App.css';
import React from "react";
import app from './firebase.init';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";
import Home from './Components/HomePage/Home/Home';
import Header from './Components/HomePage/Header/Header';
import Navbar from './Components/HomePage/Navbar/Navbar';
import Footer from './Components/HomePage/Footer/Footer';
import BloodDonation from "./Components/BloodDonation/BloodDonation";
import RegistrationForm from './Components/RegistrationForm/RegistrationForm';
import Gallery from './Components/Gallery/Gallery';
import About from './Components/About/About';
import QarzeRequest from './Components/QarzeRequest/QarzeRequest';
import AdminPage from './Components/AdminPage/AdminPage';
export const UserContext = createContext();

const auth = getAuth(app);
export const db = getFirestore(app)

function App() {
  
  const [user, setUser] = useState({});
  return (
    <UserContext.Provider value={[user, setUser]}>
      <Router>
        <Header></Header>
        <Navbar></Navbar>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/blooddonate" element={<BloodDonation />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/qarze" element={<QarzeRequest />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>


        <Footer></Footer>
      </Router>

    </UserContext.Provider>

  );
};

export default App;

// import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enable or not
  const [alert, setAlert] = useState(null);
  const [active1, setActive1] = useState('active');
  const [active2, setActive2] = useState('');

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }
  const toggleMode1 = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#0b0f3a';
      showAlert("Dark mode enabled", "dark");
      document.title = "Texutils - Dark Mode";
      // setInterval(() => {
      // document.title = "Texutils is an amazing page.";
      // }, 2000);
      // setInterval(() => {
      // document.title = "Install Texutils.";
      // }, 1500);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enabled", "dark");
      document.title = "Texutils - Light Mode";
      // setInterval(() => {
      //   document.querySelector("h1").innerText = "Texutils is an amazing page.";
      // }, 3000);
      // setInterval(() => {
      //   document.querySelector("h1").innerText = "Install Texutils.";
      // }, 4000);
    }
  }
  const toggleMode2 = () => {
    if (mode === 'light') {
      setMode('danger');
      document.body.style.backgroundColor = '#F60909';
      showAlert("Danger mode enabled", "danger");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enabled", "danger");
    }
  }
  const toggleMode3 = () => {
    if (mode === 'light') {
      setMode('success');
      document.body.style.backgroundColor = '#1ED006';
      showAlert("Success mode enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enabled", "success");
    }
  }
  const toggleMode4 = () => {
    if (mode === 'light') {
      setMode('warning');
      document.body.style.backgroundColor = '#BF9708';
      showAlert("Warning mode enabled", "warning");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enabled", "warning");
    }
  }

  const activeStatus1 = () => {
    if (active1 === '') {
      setActive1('active');
      setActive2('');
      console.log("qwerty1");
    }
  }
  const activeStatus2 = () => {
    if (active2 === '') {
      setActive2('active');
      setActive1('');
      console.log("qwerty2");
    }
  }
  return (
    <>
      <Router>
        <Navbar title="Naive-Coder" home="Home" mode={mode} active1={active1} active2={active2} activeStatus1={activeStatus1} activeStatus2={activeStatus2} toggleMode1={toggleMode1} toggleMode2={toggleMode2} toggleMode3={toggleMode3} toggleMode4={toggleMode4} />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} />} />
            {/* <TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} /> */}
            <Route exact path="/about" element={<About mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

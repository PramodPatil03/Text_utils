
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextForm from './components/TextForm';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Java from './components/Languages/Java';
import Python from './components/Languages/Python';
import CLang from './components/Languages/CLang';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (msg, type) => {
    setAlert(
      {
        message: msg,
        type: type
      });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#1f2020';
      document.body.style.color = 'white';
      showAlert('Dark mode has been Enabled', 'success');

    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert('Light mode has been Enabled', 'success');
    }
  }
  
  return (
    <>
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} title="Programmers_Logic" aboutText="About us" />
        {/* <Navbar/> */}
        <Alert alert={alert} />
        <div className="container">

          <Routes>  
            <Route exact path="/" element={<TextForm mode={mode} showAlert={showAlert} heading='Enter your text here' />} />
            <Route exact path="/about" element={<About mode={mode} />} />
            {/* <Route exact path="/languages" element={<About mode={mode} />} /> */}
            <Route exact path="/java" element={<Java mode={mode} />} />
            <Route exact path="/python" element={<Python mode={mode} />} />
            <Route exact path="/C" element={<CLang mode={mode} />} />

          </Routes>
          <Footer mode={mode} />
        </div>
      </Router>

    </>
  );

}



export default App;
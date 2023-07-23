import './App.css';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Home from './pages/home';
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';



function App() {

  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  </>

);
}

export default App;
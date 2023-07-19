import './App.css';
import React, {useState, useEffect} from 'react';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Home from './pages/home';
import About from './pages/about';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route}from 'react-router-dom';
import loader1 from './components/images/loader1.gif'


function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 100)
  }, [])
  return (
    <div className="app">
      {
        loading ?
  
        <img src={loader1} className="loader-img" alt="..."/>

    :
  
<>
   <Router>
	   <Navbar />
    <Routes>
		  <Route exact path='/'  element={<Home />} />
	    <Route path='/home'  element={<Home />} />
      <Route path='/about' element={<About/>} />
	  </Routes>
	<Footer/>
  </Router>

</>
}
</div>
  );
}

export default App;

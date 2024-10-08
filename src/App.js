import React from 'react'
import Navbar from './components/Navbar';

import Footer from './components/Footer';
import Home from './routes/homePage/Home';
import Country from './components/Country';


function App() {
  return (
    <div className="App">
     <Navbar />
     <Home />
     <Footer />
     <Country />
    </div>
  );
}

export default App;

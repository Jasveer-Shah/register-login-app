import React from 'react'; 
import './App.css';
import Sidebar from './Sidebar'
import Header from './components/Header'
import Container from './components/Container'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
function App() {
  return (
    <div className="app">
     <Sidebar/>
     <div className= "Main__container">
     <Navbar/>
     <Header/>
     <Container/>
     <Footer/>
     </div>
     <div>Testing changes!</div>
   </div>
  );
}

export default App;

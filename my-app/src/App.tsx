import React from 'react';
import Dashboard from './components/Dashboard';
import Footer from './components/footer';
//import './App.css'
import { exampleGames, exampleNewsItems } from './components/mockData'; // Asegúrate de que las rutas son correctas

function App() {
  return (
    <div className="App">
      <Dashboard games={exampleGames} newsItems={exampleNewsItems} />
      <Footer/>
    </div>

  );
}

export default App;

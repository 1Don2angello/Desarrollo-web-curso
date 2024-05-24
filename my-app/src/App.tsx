import React from 'react';
import Dashboard from './components/Dashboard';
import { exampleGames, exampleNewsItems } from './components/mockData'; // Asegúrate de que las rutas son correctas

function App() {
  return (
    <div className="App">
      <Dashboard games={exampleGames} newsItems={exampleNewsItems} />
    </div>
  );
}

export default App;

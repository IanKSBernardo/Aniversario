import React from 'react';
import Counter from './components/Counter.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="cover">
        <h1>Nuestro Aniversario</h1>
      </header>
      <main>
        <Counter />
        <img src={`${process.env.PUBLIC_URL}/Aniversario-img.jpeg`} alt="Imagen de aniversario" />
      </main>
    </div>
  );
}

export default App;
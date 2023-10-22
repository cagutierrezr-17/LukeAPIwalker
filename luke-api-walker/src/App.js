import React, { useState } from 'react';
import Formulario from './Componentes/Formulario';
import './Componentes/Formulario.css'
import obiwan from './img/obiwan.png'

function App() {
  const [resultado, setResultado] = useState(null);
  const [error, setError] = useState(false);

  const handleResultado = (datos) => {
    setResultado(datos);
    setError(false);
  };

  const handleError = () => {
    setResultado(null);
    setError(true);
  };

  return (
    <div className="App">
      <h1>Busqueda en la API de Star Wars</h1>
      <Formulario elResultado={handleResultado} elError={handleError} />
      {error && (
        <div className="errores">
          <p>Estos no son los droides que está buscando</p>
          <img src={obiwan} alt='Obi' />
        </div>
      )}
      {resultado && (
        <div className="resultado">
          {Object.keys(resultado).slice(0, 4).map((key) => (
            resultado[key] && (
              <p key={key}>
                {key}: {resultado[key]}
              </p>
            )
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
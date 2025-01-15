import React, {Suspense, lazy} from 'react';
import './App.css';
const Imagen = lazy(()=> import('./imagen'));



function App() {
  return (
    <div className="App">
      <div>
        <h1>Imagenes</h1>
      </div>
      <br/>
      <Suspense fallback={<h1>Cargando</h1>}>
        <Imagen />
        </Suspense>
    </div>
  );
}

export default App;

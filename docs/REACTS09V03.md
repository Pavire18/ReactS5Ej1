# Video 03 - Lazy loading con Router

El lazy loading es una técnica para cargar componentes de forma "perezosa", es decir, solo cuando son necesarios. Esto ayuda a mejorar el rendimiento de una aplicación al no cargar todos los componentes de una vez.

React Router ofrece una forma de implementar el lazy loading de los componentes utilizando la función lazy de React. Esta función se utiliza para cargar un componente de forma perezosa.

Para utilizar el lazy loading con React Router, primero debes importar el componente de forma perezosa.

```jsx
const Home = lazy(() => import('./components/Home'));
```

Luego, en lugar de utilizar el componente Home directamente en la ruta, se utiliza un componente Suspense para mostrar un componente mientras se carga el componente importado de forma perezosa.

```jsx
<Route path='/about' element={
	<React.Suspense fallback={<p>Cargando...</p>}>
		<About></About>
	</React.Suspense>}>
</Route>
```

Con esto se logra hacer lazy loading de los componentes, el componente Home solo sera cargado cuando se acceda a la ruta '/', esto mejora el rendimiento de la aplicación al no cargar componentes que no son necesarios en ese momento.

Nuestra App.js quedaría así:

```jsx
import './App.css';
import React from 'react';
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
// Home lo importamos normal, no de manera lazy
import Home from "./components/Home";

// About y FAQs lo importamos de manera lazy
const About = React.lazy(() => import("./components/About"));
const Faqs = React.lazy(() => import("./components/Faqs"));

function App() {

  return (
    <div className="app">
      <BrowserRouter>

        <div className='links'>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/faqs/0">FAQ 0</Link>
          <Link to="/faqs/1">FAQ 1</Link>
        </div>

        <Routes>
          {/* Ejemplo de ruta normal (no lazy) */}
          <Route path='/' element={<Home></Home>}></Route>

          {/* Ejemplos con rutas lazy */}
          <Route path='/about' element={<React.Suspense fallback={<p>Cargando...</p>}><About></About></React.Suspense>}></Route>
          <Route path='/faqs/:id' element={<React.Suspense fallback={<p>Cargando...</p>}><Faqs></Faqs></React.Suspense>}></Route>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
```

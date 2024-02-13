# Video 04 - Rutas activas y página de error

Si queremos mostrar que una de las rutas está activa debemos sustituir el componente Link por el componente NavLink:

```jsx
<NavLink to="/">Home</NavLink>
```

Esto hará que si la página actual coincide con el enlace, React le pondrá la clase active, por lo que podremos ponerle estilos diferentes por CSS:

```css
.links a {
  color: #333;
  text-decoration: none;
}

.links a.active {
  text-decoration: underline;
  color: #3030d7;
}
```

Por otro lado podemos también controlar qué sucede cuando el usuario intente cargar una página que no tenemos dentro de nuestro listado de rutas, para ello podemos crear un componente que muestre un mensaje de no encontrado:

```jsx
<Route path='*' element={<NotFound></NotFound>}></Route>
```

Al declarar la ruta con asterisco (*) le decimos a React router que siempre que no consiga “matchear” una ruta nos muestre este componente.

Nuestra app quedaría así:

```jsx
import './App.css';
import React from 'react';
import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
// Home lo importamos normal, no de manera lazy
import Home from "./components/Home";
import NotFound from "./components/NotFound";

// About y FAQs lo importamos de manera lazy
const About = React.lazy(() => import("./components/About"));
const Faqs = React.lazy(() => import("./components/Faqs"));

function App() {

  return (
    <div className="app">
      <BrowserRouter>

        <div className='links'>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/faqs/0">FAQ 0</NavLink>
          <NavLink to="/faqs/1">FAQ 1</NavLink>
        </div>

        <Routes>
          {/* Ejemplo de ruta normal (no lazy) */}
          <Route path='/' element={<Home></Home>}></Route>

          {/* Ejemplos con rutas lazy */}
          <Route path='/about' element={<React.Suspense fallback={<p>Cargando...</p>}><About></About></React.Suspense>}></Route>
          <Route path='/faqs/:id' element={<React.Suspense fallback={<p>Cargando...</p>}><Faqs></Faqs></React.Suspense>}></Route>

          {/* Ejemplo de ruta normal (no lazy) */}
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
```

Y nuestro App.css así:

```css
.app {
  padding: 10px;
}

.links {
  margin-bottom: 20px;
  text-align: center;
  display: block;
}

.links a {
  font-size: 18px;
  margin: 5px;
  padding: 5px 10px;
  border: 1px solid #333;
  border-radius: 5px;
  display: inline-block;
  color: #333;
  text-decoration: none;
}

.links a.active {
  text-decoration: underline;
  color: #3030d7;
}

.page {
  text-align: center;
  padding: 20px;
}
```

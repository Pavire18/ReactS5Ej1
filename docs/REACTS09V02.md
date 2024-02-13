# VIDEO 02 - Rutas con parámetros

Los parámetros en las rutas le permiten a un desarrollador pasar información dinámica a través de las URLs de la aplicación. Por ejemplo, si quieres mostrar una página de detalles de un producto, puedes pasar el ID del producto como un parámetro en la URL y utilizarlo en el componente de detalles del producto para mostrar información específica del producto.

Para agregar parámetros a una ruta, se utiliza el símbolo : seguido del nombre del parámetro. Por ejemplo, si deseas agregar un parámetro llamado "id" a la ruta "/productos", se debe colocar “:id“ en la ruta quedando como "/productos/:id”

En nuestro proyecto, por ejemplo, si queremos agregar un parámetro de id en la ruta de FAQs, se puede hacer de la siguiente manera en los links:

```jsx
<Link to="/faqs/1">FAQ 1</Link>
<Link to="/faqs/2">FAQ 2</Link>
```

Y después indicar a la ruta que puede recibir ese parámetro:

```jsx
<Route path='/faqs/:id' element={<Faqs></Faqs>}></Route>
```

Y en el componente de Faqs se puede obtener el valor de ese parámetro utilizando el hook useParams de react-router-dom:

```jsx
let { id } = useParams();
```

Con esto se puede obtener el valor del parámetro y utilizarlo para mostrar información específica de acuerdo al id del parámetro.

De esta manera nuestro componente App completo quedaría así:

```jsx
import './App.css';
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Faqs from "./components/Faqs";

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
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/faqs/:id' element={<Faqs></Faqs>}></Route>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
```

Y nuestro componente FAQs así:

```jsx
import React from "react";
import { useParams } from 'react-router-dom';

const faqs = [{
  question: "¿Cómo puedo llegar al concierto?",
  answer: "Hay autobuses que te dejan en la puerta",
  opened: false,
}, {
  question: "¿A qué hora abren puertas?",
  answer: "A las 18.00",
  opened: false,
}];

const Faqs = () => {

  let { id } = useParams();

  return (
    <div className="page faqs">
      <h1>FAQs</h1>

      <div className="faq">
        <p className="faq__question"><strong>{faqs[id].question}</strong></p>
        <p className="faq__answer">{faqs[id].answer}</p>
      </div>

    </div>
  );
}

export default Faqs;
```

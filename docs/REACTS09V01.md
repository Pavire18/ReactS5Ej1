# VIDEO 01 - Intro a React Router

React Router es una librería de JavaScript que se utiliza para agregar enrutamiento a aplicaciones hechas con React. Permite a los desarrolladores definir rutas para diferentes componentes de la aplicación y navegar entre ellas de manera sencilla. Esto permite crear una experiencia de usuario más fluida y natural en aplicaciones web.

<https://reactrouter.com/en/main>

Para usar React Router en una aplicación, primero se debe instalar la librería mediante npm. Una vez instalada, se pueden importar los componentes necesarios para configurar las rutas, como BrowserRouter, Route y Link.

```jsx
npm install react-router-dom
```

**BrowserRouter** es el componente principal que se utiliza para configurar el enrutamiento en la aplicación. Es el componente que envuelve a toda la aplicación y se encarga de manejar la historia del navegador para que las rutas funcionen correctamente.

**Route** es el componente que se utiliza para definir las rutas de la aplicación. Se utiliza para especificar qué componente debe renderizarse cuando se accede a una determinada ruta. Por ejemplo, si se quiere que un componente llamado Home se muestre cuando se accede a la ruta raíz de la aplicación, se puede utilizar el siguiente código:

```jsx
<Route path="/" component={Home} />
```

**Link** es el componente que se utiliza para crear enlaces entre diferentes rutas de la aplicación. Es similar a los enlaces normales, pero se utiliza para navegar entre las rutas definidas en lugar de cambiar de página completamente.

El componente **Routes** es el que se utiliza para colocar todas las rutas definidas en la aplicación, y se suele colocar dentro del componente BrowserRouter.

Para utilizar estos componentes, se deben importar desde '**react-router-dom**' y se deben colocar dentro del componente principal de la aplicación.

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
          <Link to="/faqs">FAQs</Link>
        </div>

        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/faqs' element={<Faqs></Faqs>}></Route>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
```

Con esto se tiene una estructura básica de como usar React Router, se pueden agregar mas rutas y componentes para crear una aplicación mas compleja.


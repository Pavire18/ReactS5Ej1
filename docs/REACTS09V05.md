# Video 05 - Router con Auth

En este vídeo vamos a ver cómo implementar un login en React que afecte al Router, de manera que solo podamos navegar a las rutas protegidas cuando el usuario esté logado.

En primer lugar haremos uso de un useContext que nos de la información de login por toda la aplicación, lo mantendremos en el app.js que es el componente raíz:

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
const MyAccount = React.lazy(() => import("./components/MyAccount"));
const Login = React.lazy(() => import("./components/Login"));

// Contextos 
export const AuthContext = React.createContext({ user: null });

function App() {
  const [authInfo, setAuthInfo] = React.useState({ user: null });

  return (
    <AuthContext.Provider value={authInfo}>
      <div className="app">
        <BrowserRouter>

          <div className='links'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/faqs/0">FAQ 0</NavLink>
            <NavLink to="/faqs/1">FAQ 1</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/my-account">Mi Cuenta</NavLink>
          </div>

          <p>Usuario: {authInfo && authInfo.user ? "Logado" : "No logado"}</p>

          <Routes>
            {/* Ejemplo de ruta normal (no lazy) */}
            <Route path='/' element={<Home></Home>}></Route>

            {/* Ejemplos con rutas lazy */}
            <Route path='/about' element={<React.Suspense fallback={<p>Cargando...</p>}><About></About></React.Suspense>}></Route>
            <Route path='/faqs/:id' element={<React.Suspense fallback={<p>Cargando...</p>}><Faqs></Faqs></React.Suspense>}></Route>
            <Route path='/login' element={<React.Suspense fallback={<p>Cargando...</p>}><Login login={setAuthInfo}></Login></React.Suspense>}></Route>
            <Route path='/my-account' element={<React.Suspense fallback={<p>Cargando...</p>}><MyAccount></MyAccount></React.Suspense>}></Route>

            {/* Ejemplo de ruta normal (no lazy) */}
            <Route path='*' element={<NotFound></NotFound>}></Route>
          </Routes>

        </BrowserRouter>
      </div>
    </AuthContext.Provider>

  );
}

export default App;
```

Después desde nuestro componente login podemos revisar si el usuario está logado o no. En caso de que no esté logado mostramos el componente de login, para simplificar el ejemplo pondremos solo un botón en lugar de un formulario.

Una vez el usuario se haya logado, siempre que intentemos navegar a /login redigiremos al usuario a /my-account ya que el usuario no necesita logarse otra vez. Así queda el componente Login:

```jsx
import React from "react";
import { AuthContext } from "../App";
import { Navigate } from "react-router-dom";

const Login = (props) => {

  const authInfo = React.useContext(AuthContext);

  return (
    <div className="page login">

      {authInfo && authInfo.user ?

        <Navigate to="/my-account" replace={true}></Navigate> :
        <>
          <h1>Login</h1>
          <p>Usuario: {authInfo && authInfo.user ? "Logado" : "No logado"}</p>
          {/* Ejemplo login sencillo, normalmente tendríamos un formulario */}
          <button onClick={() => props.login({ user: "Fran" })}>LOG IN</button>
        </>
      }

    </div>
  );
}

export default Login;
```

En el componente MyAccount haremos lo contrario, si el usuario está logado le mostramos su información y si no le redirigimos a /login para que inicie sesión:

```jsx
import React from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../App";

const MyAccount = () => {

  const authInfo = React.useContext(AuthContext);

  return (
    <div className="page my-account">

      {authInfo && authInfo.user ?

        <>
          <h1>MyAccount</h1>
          <p>Bienvenido a tu cuenta {authInfo.user}</p>
        </> :
        <Navigate to="/login" replace={true}></Navigate>
      }

    </div>
  );
}

export default MyAccount;
```

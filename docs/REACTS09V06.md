# Video 06 - Router con navegación atrás y adelante

En este Video vamos a ver cómo podemos implementar una navegación hacia delante o hacia atrás, haciendo uso de dos botones en la cabecera de nuestra página

Para ello haremos uso del Hook useNavigate:

<https://reactrouter.com/en/main/hooks/use-navigate>

Nuestro componente Header quedará de la siguiente forma:

```jsx
import { NavLink, useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  // Navegación
  const navigate = useNavigate();

  return (
    <nav className='navigation'>
      <button className="navigation__link" onClick={() => navigate(-1)}>Atrás</button>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/faqs/0">FAQs 0</NavLink>
      <NavLink to="/faqs/1">FAQs 1</NavLink>
      <NavLink to="/faqs/2">FAQs 2</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/my-account">My Account</NavLink>
      <button className="navigation__link" onClick={() => navigate(1)}>Adelante</button>
    </nav>
  );
}
```

Recuerda que el código que hemos visto durante los vídeos puedes encontrarlo en el siguiente repositorio:

<https://github.com/The-Valley-School/react-s9-router>
# Video 07 - Ejercicio: Catálogo de productos

Vamos a crear un catálogo de productos con navegación. 

Para ello seguiremos los siguientes pasos:

**Paso 1: Creación del proyecto**

Crea un proyecto nuevo haciendo uso de create-react-app e instala la librería react-router-dom

<https://reactrouter.com/en/main/>

**Paso 2: Añade la navegación:**

Crea las siguientes rutas:

- home (/)
- /products
- /product-detail/:id
- /login
- /my-account
- (un Not found para todas las páginas que no coincidan con las anteriores)

Y crea un menú de navegación para moverte entre ellas. En el menú de navegación debes poner un botón de atrás y adelante para moverte entre el historial de páginas visitadas:

![home.png](/docs/assets/home.png)

En la Home como se muestra en la imagen añadiremos contenido de relleno (Lorem ipsum)

**Paso 3: Página de productos**

En la página de productos debes mostrar una lista de productos. Los productos te los dejamos preparados en esta variable que puedes dejar en cualquier archivo e importar la variable allí donde necesites usarla:

```jsx
export const products = [{
  id: 0,
  name: "Pelota de baloncesto",
  price: "20€",
  description: "Esta es una pelota brutal hecha de piel de canguro",
  image: "https://www.shutterstock.com/image-photo/basketball-ball-over-white-background-600w-101641516.jpg"
}, {
  id: 1,
  name: "Zapatillas de futbol",
  price: "80€",
  description: "Estas zapatillas de tacos te darán un agarre increíble",
  image: "https://www.shutterstock.com/image-photo/red-football-shoes-isolated-over-600w-2173182005.jpg"
}, {
  id: 2,
  name: "Raqueta de pádel",
  price: "50€",
  description: "Consigue el control y el golpeo que necesitas con esta raqueta de pádel",
  image: "https://www.shutterstock.com/image-photo/hand-tennis-racket-hitting-ball-600w-180971615.jpg"
}, {
  id: 3,
  name: "Raqueta de tenis",
  price: "100€",
  description: "Esta raqueta de tenis es ideal para jugadores intermedios y avanzados",
  image: "https://www.shutterstock.com/image-photo/new-tennis-racket-isolated-on-600w-471436889.jpg"
}, {
  id: 4,
  name: "Tabla de surf",
  price: "250€",
  description: "Esta tabla de surf es perfecta para surfeando olas grandes",
  image: "https://www.shutterstock.com/image-photo/surfboard-isolated-on-white-background-600w-1871580643.jpg"
}, {
  id: 5,
  name: "Malla de hockey",
  price: "80€",
  description: "Esta malla de hockey es ideal para proteger tu cara mientras juegas",
  image: "https://www.shutterstock.com/image-photo/blue-ice-hockey-protective-helmet-600w-1560908507.jpg"
}, {
  id: 6,
  name: "Mochila de senderismo",
  price: "70€",
  description: "Esta mochila de senderismo tiene un gran compartimento principal y bolsillos adicionales para almacenar tus suministros",
  image: "https://www.shutterstock.com/image-photo/green-backpack-open-isolated-on-600w-2082399778.jpg"
}, {
  id: 7,
  name: "Bicicleta de montaña",
  price: "800€",
  description: "Esta bicicleta de montaña es perfecta para senderos difíciles y empinadas",
  image: "https://www.shutterstock.com/shutterstock/photos/409983469/display_1500/stock-photo-black-blue-mountain-bike-isolated-on-white-background-409983469.jpg"
}];
```

La página de productos quedará así:

![Untitled](/docs/assets/Untitled.png)

**Paso 4: Página de detalle de producto**

Al pulsar en el enlace “ver producto” navegaremos al detalle de un producto, en la ruta enviaremos el id del producto a visitar, por ejemplo para la pelota de baloncesto debemos navegar a /product-detail/0 

Cuando pintemos la página de detalle de producto miraremos el ID y con ese ID buscaremos en el array el producto a mostrar y lo pintaremos:

![Untitled](/docs/assets/Untitled%201.png)

**Paso 5: Página de Login**

Crea una página donde mediante un botón podremos hacer login:

![Untitled](/docs/assets/Untitled%202.png)

Hasta que no hagas login no podrás navegar a Mi Cuenta, siempre que lo intentes te llevará a Login de nuevo

**Paso 6: Página Mi cuenta**

Crea la página para mostrar la página de Mi Cuenta, ahí mostraremos el nombre de usuario y si ha marcado como favorito un producto indicaremos cual es:

![Untitled](/docs/assets/Untitled%203.png)

Puedes guardar la información del producto favorito dentro del contexto que guarda la información del usuario.

**Paso 7: Página no encontrada**

Siempre que el usuario ponga una ruta no válida verá la página de Not Found:

![Untitled](/docs/assets/Untitled%204.png)

Recuerda que el código que hemos visto durante los vídeos puedes encontrarlo en el siguiente repositorio:

<https://github.com/The-Valley-School/react-s9-router>
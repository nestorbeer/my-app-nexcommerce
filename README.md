# Bienvenido a nex-commerce!

Hola bienvenido/a a nex-commerce, el ecommerce realizado en el curso de React JS de coder house, es totalmente parametrizable desde las categorias hasta los productos, utiliza las librerias de Boostrap React(https://react-bootstrap.github.io/) para los componentes visuales, sweetalert2(https://sweetalert2.github.io/recipe-gallery/sweetalert2-react.html) para los mensajes  de alerta, y fontawasome(https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react) para los iconos.
Como base de datos utiliza firebase (https://firebase.google.com/).

# Instalación

Clonar el codigo a una carpeta local (https://docs.github.com/es/repositories/creating-and-managing-repositories/cloning-a-repository) y abrir la carpeta con VS-CODE (recomendable), abrir una terminal y correr el comando npm install para instalar las dependencias.
Luego ejecutar npm start para verificar el correcto funcionamiento


# Sobre el codigo

Se implemento un contexto para guardar todos los datos y comportamientos del carrito de compras, el mismo encierra en App.js un React router el cual se encarga de montar el componente que corresponde segun la navegación que se esta ejecutando. 
Se cuenta con una home para mostar publicidad al momento de ingresar por primera vez o de navegar a la home desde cualquier componente, ya que el boton para navegar a la home se encuentra en la barra de navegacion.
La barra de navegacion tiene un link a la home, una lista de las categorias parametrizadas en la base de datos, un buscador de productos y un icono con el carrito el cual se muestra una vez agregado algun producto al mismo.

# Alcance funcional

Puntos contemplados en el proyecto:

 - Barra de navegación dinamica, recupera las categorias de una colección de firebase.
 - Home con publicidad y productos destacados, tambien recuperados de firebase.
 - Listado de productos filtrado por categorias, el presionar en una categoria te dirige al listado recuperando de firebase solo los productos que pertenecen a dicha categoria.
 - Detalle de producto recuperando los datos de firebase por id de documento.
 - Finalización de compra y check out, se permite visualizar los productos agegados al carrito, mostrando detalles de importes unitarios, cantidades y totales.
 - Se permite ingresar los datos para la generaciòn del pedido.
 - Se genera el pedido en firebase, se muestra el codigo de orden generada y se actualizan los stocks mediante proceso batch.
 - Buscador de pedidos generados, y buscador de productos.
 
![Entrega final del TP](https://firebasestorage.googleapis.com/v0/b/nex-commerce.appspot.com/o/nex-commerce%20final.gif?alt=media&token=2946297a-b055-45b5-9da1-ebbfdcb547cf)
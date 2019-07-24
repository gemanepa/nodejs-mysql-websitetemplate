
function ListaProductosView(productsList) {
  const products = productsList.map((product) => `
  <h3>${product.nombre}</h3>
  <h4>$${product.precio}0</h4>
  <article>
    <div>
      <img src=".${product.imagen.substring('public'.length)}" alt="${product.nombre}">
    </div>
    <p>${product.descripcion}</p>
  </article>
  <br>
  `);

  return `
  <!DOCTYPE HTML>
  <html lang="es">
    <head>
    <meta charset="utf-8"/>
    <title>NodeJS|MySQL - Productos</title>
    <link href="/stylesheets/productos.css" rel="stylesheet">
    <link href='https://fonts.googleapis.com/css?family=Source+Sans+Pro:400' rel='stylesheet' type='text/css'>
    </head>

    <body>
      <ul>
        <li><a href="/home">Home</a></li>
        <li><a href="/nosotros">Nosotros</a></li>
        <li><a href="/productos">Productos</a></li>
        <li><a href="/contacto">Contacto</a></li>
      </ul>
      <main>
      ${products.join('')}
      </main>
    </body>
  </html>
  `
}

module.exports.ListaProductosView = ListaProductosView
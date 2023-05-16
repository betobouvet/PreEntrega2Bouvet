
let enlaces = Array.from(document.querySelectorAll('a'));


function acceso() {
  let main = document.getElementById('acceso');

  if (confirm('Hola, estás por ingresar a una página de venta de repuestos varios. Si deseas ver los productos, haz click en "Aceptar"; en caso contrario, en "Cancelar".')) {
    alert("Clickeaste Aceptar. Se mostrará la tienda.");
    main.style.display = 'block';
  } else {
    alert("Haz click en Cancelar. ¡Qué pena, te pierdes la gran variedad de productos de nuestra tienda!");
    main.style.display = 'none';
  }
}

function obtenerNombre() {
  let nombre = prompt(`Ingresa tu nombre:`);
  alert(`Hola ${nombre}, bienvenido/a a la página. ¡Es un gusto tenerte aquí!`);
}

function mostrarInformacionProductos() {
  enlaces.forEach(function (enlace) {
    enlace.addEventListener('click', function (event) {
      event.preventDefault();
      let precio = enlace.dataset.precio;
      let descuento = enlace.dataset.descuento;
      let precioTotal = calcularPrecioTotal(precio, descuento);
      if (precioTotal > 50000) {
        if (confirm('Estás por comprar este producto. ¿Deseas continuar?')) {
          alert('¡Compra realizada con éxito!');
        } else {
          alert('Has cancelado la compra.');
        }
      } else {
        alert('Puedes seguir comprando. Estás gastando menos de $50000.');
      }
      alert(`El precio es: ${precio}\nEl descuento aplicado es: ${descuento}\nEl precio total es ${precioTotal}`);
    });
  });
}

function calcularPrecioTotal(precio, descuento) {
  return precio - (precio * descuento) / 100;
}

function buscarProductoPorPrecio(precio) {
  return enlaces.find(function (enlace) {
    return enlace.dataset.precio == precio;
  });
}

function filtrarProductosPorDescuento(descuento) {
  return enlaces.filter(function (enlace) {
    return enlace.dataset.descuento >= descuento;
  });
}

acceso();
obtenerNombre();
mostrarInformacionProductos();

let productoPrecio5000 = buscarProductoPorPrecio('5000');
console.log(productoPrecio5000);

let productosDescuento25 = filtrarProductosPorDescuento(25);
console.log(productosDescuento25);

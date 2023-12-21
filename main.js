let nombre = "";
let mesa = "";
let subTotal = 0;
let propinaPorcentaje = 0;
let detallesPedido = `Detalles del pedido:\n`;

const platos = {
    entrada: [
        { id: 1, nombre: "empanadas", precio: 3.5 },
        { id: 2, nombre: "arepitas", precio: 4.0 },
        { id: 3, nombre: "pan con queso", precio: 2.5 },
        { id: 4, nombre: "facturas", precio: 5.0 },
        { id: 0, nombre: "0", precio: 0 },
    ],
    principal: [
        { id: 20, nombre: "pasticho", precio: 9.5 },
        { id: 21, nombre: "ojo de bife", precio: 14.0 },
        { id: 22, nombre: "costillas de cerdo", precio: 2.5 },
        { id: 23, nombre: "sopa", precio: 5.0 },
        { id: 0, nombre: "0", precio: 0 },
    ],
    bebida: [
        { id: 30, nombre: "coca cola", precio: 1.5 },
        { id: 31, nombre: "pepsi cola", precio: 1.5 },
        { id: 32, nombre: "jugo natural", precio: 2.0 },
        { id: 33, nombre: "cerveza", precio: 3.0 },
        { id: 0, nombre: "0", precio: 0 },
    ],
};

const obtenerOpcionPorID = (tipoPlato) => {
    let opcion;
        do {
            opcion = prompt(`Ingrese el número de la opción de ${tipoPlato}: \n${obtenerOpcionesPorID(platos[tipoPlato])}`            );
                if (!esOpcionValidaPorID(opcion, platos[tipoPlato])) {
                    alert(`Por favor, ingrese un número de opción de ${tipoPlato} válido.`);
                }
        } while (!esOpcionValidaPorID(opcion, platos[tipoPlato]));
    return platos[tipoPlato].find((plato) => plato.id === parseInt(opcion));
};

const obtenerOpcionesPorID = (listaPlatos) => {
    return listaPlatos.map((plato) =>`\n ${plato.id}. ${plato.nombre} .. $${plato.precio.toFixed(2)}`).join(", ");
};

const esOpcionValidaPorID = (opcion, listaPlatos) => {
    opcion = parseInt(opcion);
    return listaPlatos.some((plato) => plato.id === opcion);
};

//inicia el codigo solicitando numero de mesa y nombre cliente
do {
    mesa = parseInt(prompt("Ingrese numero de mesa para tomar el pedido").trim());

    if (isNaN(mesa) || mesa <= 0) {
        alert("Por favor, ingrese un numero de mesa válido.");
        continue;
    }

    nombre = prompt("Solicitar nombre del cliente").trim();

    if (nombre === "") {
        alert("Por favor, ingrese un nombre válido.");
    }
} while (nombre === "" || isNaN(mesa) || mesa <= 0);

// Bucle para permitir al usuario agregar varios platos
do {
  const entrada = obtenerOpcionPorID("entrada");
  const principal = obtenerOpcionPorID("principal");
  const bebida = obtenerOpcionPorID("bebida");

  // Preguntar al usuario si desea agregar otro plato
//   const respuesta = prompt("¿Desea agregar otro plato? (Sí/No)");
//   if (!respuesta || respuesta.toLowerCase() !== "si") {
//     break;
//   }
let respuesta;

do {
  respuesta = prompt("¿Desea agregar otro plato? (Sí/No)").trim().toLowerCase();

  if (respuesta !== "si" && respuesta !== "no") {
    alert("Por favor, ingrese 'si' para Sí o 'no' para No.");
  }
} while (respuesta !== "si" && respuesta !== "no");

  // Agregar detalles del pedido
  detallesPedido += `${entrada.nombre}: $${entrada.precio.toFixed(2)}\n`;
  detallesPedido += `${principal.nombre}: $${principal.precio.toFixed(2)}\n`;
  detallesPedido += `${bebida.nombre}: $${bebida.precio.toFixed(2)}\n`;

  // Calcular subtotal
  subTotal += entrada.precio + principal.precio + bebida.precio;

  
  
} while (true);

// Solicitar al usuario el porcentaje de propina
propinaPorcentaje = parseFloat(
  prompt("Ingrese el porcentaje de propina (por ejemplo, 10 para el 10%)")
);

// Calcular total
const total = subTotal + (subTotal * propinaPorcentaje) / 100;

// Agregar detalles del pedido al mensaje final
detallesPedido += `\nSubtotal: $${subTotal.toFixed(2)}`;
detallesPedido += `\nPropina (${propinaPorcentaje}%): $${(
  (subTotal * propinaPorcentaje) /
  100
).toFixed(2)}`;
detallesPedido += `\nTotal: $${total.toFixed(2)}`;

// Mostrar el mensaje final con los detalles del pedido
alert(
  `CUENTA MESA ${mesa}\n ${nombre} Gracias  por ser cliente de nuestro Restaurante,\n${detallesPedido}`
);

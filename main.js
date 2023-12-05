let nombre = "";
let entrada = "";
let principal = "";
let bebida = "";
let precioEntrada = 0;
let precioPrincipal = 0;
let precioBebida = 0;
let subTotal = 0;
let total = 0;
let propinaPorcentaje = 0;
let detallesPedido = `Detalles del pedido:\n`;

while (nombre === "") {
    nombre = prompt("Bienvenido, indique su nombre para ser atendido").trim();

    if (nombre === "") {
    alert("Por favor, ingrese un nombre válido.");
    }
}

function esOpcionValida(opcion) {
    // Limpiar espacios y convertir a minúsculas
    opcion = opcion.trim().toLowerCase();

    // Verificar si la opción es una de las opciones válidas
    return  opcion === "empanadas" || opcion === "arepitas" || opcion === "pan con queso" || opcion === "facturas" ||
            opcion === "pasticho" || opcion === "ojo de bife" || opcion === "costillas de cerdo" ||
            opcion === "sopa" || opcion === "coca cola" || opcion === "pepsi cola" || opcion === "jugo natural" || opcion === "cerveza";
}

// Bucle para permitir al usuario agregar varios platos
do {
    while (entrada === "" || !esOpcionValida(entrada)) {
    entrada = prompt(
        "Ingrese su opción de entrada (Opciones: empanadas .. $3.50, arepitas .. $4, Pan con Queso .. $2.50, Facturas .. $5)"
    );

    if (entrada === "" || !esOpcionValida(entrada)) {
        alert("Por favor, ingrese una opción de entrada válida.");
    } else {
        switch (entrada.toLowerCase()) {
        case "empanadas":
            precioEntrada = 3.5;
            break;
        case "arepitas":
            precioEntrada = 4.0;
            break;
        case "pan con queso":
            precioEntrada = 2.5;
            break;
        case "facturas":
            precioEntrada = 5.0;
            break;
            };
        };
    };

detallesPedido += `Entrada: ${entrada} - $${precioEntrada.toFixed(2)}\n`;

    while (principal === "" || !esOpcionValida(principal)) {
        principal = prompt("Ingrese su opción de principal (Opciones: Pasticho .. $9.50, ojo de bife .. $14, Costillas de Cerdo .. $2.50, Sopa .. $8)");

        if (principal === "" || !esOpcionValida(principal)) {
            alert("Por favor, ingrese una opción de principal válida.");
        } else {
            switch (principal.toLowerCase()) {
                case "pasticho":
                precioPrincipal = 9.5;
                break;
                case "ojo de bife":
                precioPrincipal = 14.0;
                break;
                case "costillas de cerdo":
                precioPrincipal = 2.5;
                break;
                case "sopa":
                precioPrincipal = 5.0;
                break;
                };
        };
    };

detallesPedido += `Principal: ${principal} - $${precioPrincipal.toFixed(2)}\n`;

    while (bebida === "" || !esOpcionValida(bebida)) {
        bebida = prompt("Ingrese su opción de bebida (Opciones: Coca Cola .. $1.50, Pepsi Cola .. $1.50, Jugo Natural .. $2, Cerveza .. $3)");

        if (bebida === "" || !esOpcionValida(bebida)) {
            alert("Por favor, ingrese una opción de bebida válida.");
        } else {
            switch (bebida.toLowerCase()) {
                case "coca cola":
                precioBebida = 1.5;
                break;
                case "pepsi cola":
                precioBebida = 1.5;
                break;
                case "jugo natural":
                precioBebida = 2.0;
                break;
                case "cerveza":
                precioBebida = 3.0;
                break;
            }
        }
    }

detallesPedido += `Bebida: ${bebida} - $${precioBebida.toFixed(2)}\n`;

  //cuenta
    subTotal += precioEntrada + precioPrincipal + precioBebida;
  // Preguntar al usuario si desea agregar otro plato
    let respuesta = prompt("¿Desea agregar otro plato? (Sí/No)");
        if (respuesta && respuesta.toLowerCase() === "si") {
            entrada = "";
            principal = "";
            bebida = "";
        } else {
            break;
        }
} while (true);

// Solicitar al usuario el porcentaje de propina
propinaPorcentaje = parseFloat(
    prompt("Ingrese el porcentaje de propina (por ejemplo, 10 para el 10%)")
);

//Propina
total = subTotal + (subTotal * propinaPorcentaje) / 100;

// detalles del pedido al mensaje final
detallesPedido += `\nSubtotal: $${subTotal.toFixed(2)}`;
detallesPedido += `\nPropina (${propinaPorcentaje}%): $${((subTotal * propinaPorcentaje) /100).toFixed(2)}`;
detallesPedido += `\nTotal: $${total.toFixed(2)}`;

// Mostrar el mensaje final con los detalles del pedido
alert(
    `Gracias ${nombre} Por ser cliente de nuestro Restaurante,  \n${detallesPedido}`);

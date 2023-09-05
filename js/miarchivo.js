// calc costo total de los productos
function calcularCostoTotal(productos) {
    let costoTotal = 0;
    for (let producto of productos) {
        costoTotal += producto.precioFinal;
    }
    return costoTotal;
}

// contador original
window.onload = function () {
    const productos = [];
    let contadorProductos = 0;

    // Nueva pre-entrega  
    alert('Te damos la bienvenida a la tienda Oh my Dog!🐶');
    alert('Por favor, seleccioná el producto, el precio y si corresponde o no que se aplique IVA');
    alert('Al final, tendrás una suma de totalizada');
    alert('Vamos a comenzar 😊');

    while (true) { 
            const nombre = prompt('Ingrese el nombre del producto (o deje en blanco para salir):');
        if (!nombre) break;

        const precioInicial = parseFloat(prompt('Ingrese el precio del producto:'));
          const aplicarIVA = prompt('¿Aplicar IVA 21%?  (si/no)').toLowerCase() === 'si';
        const ivaPorcentaje = 0.21;

        if (nombre && !isNaN(precioInicial)) {
              const precioFinal = aplicarIVA ? precioInicial * (1 + ivaPorcentaje) : precioInicial;
               const producto = { nombre, precioInicial, aplicarIVA, precioFinal };
            productos.push(producto);

             contadorProductos++;

                        // resultados   utilizando console.log()
                        console.log(`Producto ${contadorProductos}: ${nombre} - Precio Final: $${precioFinal.toFixed(2)}`);
                        console.log(`Costo Total: $${calcularCostoTotal(productos).toFixed(2)}`);
                    }
    }

        // mensaje de total de la compra 
        const totalCompra = calcularCostoTotal(productos).toFixed(2);
        alert(`El total de su compra es: $${totalCompra}`);

    // mensaje de alerta final para indicar que la pre-entrega está lista
    alert('Pre-emtrega lista, espero les guste! 😊');
}

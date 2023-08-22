// Función para calcular el costo total de productos
function calcularCostoTotal(productos) {
    let costoTotal = 0;
    for (let producto of productos) {
        costoTotal += producto.precioFinal;
    }
    return costoTotal;
}

// Evento que se ejecuta cuando se carga la página
window.onload = function () {
    const productos = [];
    let contadorProductos = 0;

    const nombreProductoInput = document.getElementById('nombreProducto');
    const precioProductoInput = document.getElementById('precioProducto');
    const ivaProductoInput = document.getElementById('ivaProducto');
    const agregarProductoButton = document.getElementById('agregarProducto');
    const productosDiv = document.getElementById('productos');
    const costoTotalSpan = document.getElementById('costoTotal');

    agregarProductoButton.addEventListener('click', function () {
        const nombre = nombreProductoInput.value.toUpperCase();
        const precioInicial = parseFloat(precioProductoInput.value);
        const aplicarIVA = parseInt(ivaProductoInput.value) === 1;
        const ivaPorcentaje = 0.21; // 21% de IVA

        if (nombre && !isNaN(precioInicial)) {
            const precioFinal = aplicarIVA ? precioInicial * (1 + ivaPorcentaje) : precioInicial;
            const producto = { nombre, precioInicial, aplicarIVA, precioFinal };
            productos.push(producto);

            contadorProductos++;

            const productoDiv = document.createElement('div');
            const spanProducto = document.createElement('span');
            spanProducto.textContent = `Producto ${contadorProductos}: `;
            spanProducto.style.color = getComputedStyle(document.documentElement).getPropertyValue('--secondary-color');

            const spanNombre = document.createElement('span');
            spanNombre.textContent = nombre;

            productoDiv.appendChild(spanProducto);
            productoDiv.appendChild(spanNombre);

            const spanPrecio = document.createElement('span');
            spanPrecio.textContent = `: $${precioFinal.toFixed(2)}`;
            productoDiv.appendChild(spanPrecio);

            const spanIva = document.createElement('span');
            spanIva.textContent = aplicarIVA ? ' (IVA 21%)' : ' (Sin IVA)';
            productoDiv.appendChild(spanIva);

            productosDiv.appendChild(productoDiv);

            const nuevoCostoTotal = calcularCostoTotal(productos);
            costoTotalSpan.textContent = `$${nuevoCostoTotal.toFixed(2)}`;

            nombreProductoInput.value = '';
            precioProductoInput.value = '';
            ivaProductoInput.value = '0';
        }
    });
}

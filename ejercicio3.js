const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese el nombre del vendedor: ', (entradaVendedor) => {

    let vendedor = entradaVendedor.trim();

    rl.question('Ingrese el nombre del producto: ', (entradaProducto) => {

        let producto = entradaProducto.trim();

        rl.question('Ingrese el precio base del producto: $', (entradaPrecio) => {

            let precio = parseFloat(entradaPrecio);

            if (isNaN(precio) || precio <= 0) {
                console.log('El precio ingresado no es válido.');
                rl.close();
                return;
            }

            console.log('\n===== CATEGORÍAS =====');
            console.log('A. Línea Blanca - 10% de descuento');
            console.log('B. Electrónica - 5% de descuento');
            console.log('C. Mueblería - 15% de descuento');
            console.log('D. Accesorios/Varios - 0% de descuento');

            rl.question('Seleccione una categoría: ', (entradaCategoria) => {

                let categoria = entradaCategoria.trim().toUpperCase();
                let nombreCategoria;
                let porcentajeDescuento;

                switch (categoria) {

                    case 'A':
                        nombreCategoria = 'Línea Blanca';
                        porcentajeDescuento = 0.10;
                        break;

                    case 'B':
                        nombreCategoria = 'Electrónica';
                        porcentajeDescuento = 0.05;
                        break;

                    case 'C':
                        nombreCategoria = 'Mueblería';
                        porcentajeDescuento = 0.15;
                        break;

                    case 'D':
                        nombreCategoria = 'Accesorios/Varios';
                        porcentajeDescuento = 0;
                        break;

                    default:
                        console.log('La categoría seleccionada no existe.');
                        rl.close();
                        return;
                }

                let descuento = precio * porcentajeDescuento;

                let subtotalProducto = precio - descuento;

                rl.question('¿Desea agregar garantía extendida? (S/N): ', (entradaGarantia) => {

                    let garantia = entradaGarantia.trim().toUpperCase();
                    let costoGarantia = 0;

                    if (garantia === 'S') {
                        costoGarantia = 25;
                    } else if (garantia === 'N') {
                        costoGarantia = 0;
                    } else {
                        console.log('Respuesta no válida. Debe ingresar S o N.');
                        rl.close();
                        return;
                    }

                    let subtotal = subtotalProducto + costoGarantia;

                    let iva = subtotal * 0.13;

                    let total = subtotal + iva;

                    let cobroRedondeado = Math.round(total);

                    let fecha = new Date();

                    console.log('\n======================================');
                    console.log('          FACTURA FISCAL');
                    console.log('======================================');
                    console.log(`Fecha: ${fecha.toLocaleDateString()}`);
                    console.log(`Hora: ${fecha.toLocaleString()}`);
                    console.log(`Vendedor: ${vendedor}`);
                    console.log(`Producto: ${producto}`);
                    console.log(`Categoría: ${nombreCategoria}`);
                    console.log(`Precio base: $${precio.toFixed(2)}`);
                    console.log(`Descuento: $${descuento.toFixed(2)}`);
                    console.log(`Garantía extendida: $${costoGarantia.toFixed(2)}`);
                    console.log(`Subtotal: $${subtotal.toFixed(2)}`);
                    console.log(`IVA (13%): $${iva.toFixed(2)}`);
                    console.log(`Total: $${total.toFixed(2)}`);
                    console.log(`Cobro aproximado: $${cobroRedondeado}`);
                    console.log('======================================');

                    rl.close();
                });
            });
        });
    });
});
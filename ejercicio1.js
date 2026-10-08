const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese el nombre completo del cliente: ', (entradaNombre) => {

    let nombre = entradaNombre.trim();

    rl.question('Ingrese la marca y modelo del vehículo: ', (entradaVehiculo) => {

        let vehiculo = entradaVehiculo.trim();

        rl.question('Ingrese el monto base del vehículo: $', (entradaPrecio) => {

            let precio = parseFloat(entradaPrecio);

            if (isNaN(precio) || precio <= 0) {
                console.log('El precio ingresado no es válido.');
                rl.close();
                return;
            }

            console.log('\nTIPO DE VEHÍCULO');
            console.log('1. Sedán - Prima del 5%');
            console.log('2. SUV - Prima del 8%');
            console.log('3. Pick-up / Camioneta - Prima del 12%');

            rl.question('Seleccione una opción: ', (entradaOpcion) => {

                let opcion = parseInt(entradaOpcion);
                let porcentaje;
                let tipo;

                switch (opcion) {
                    case 1:
                        tipo = 'Sedán';
                        porcentaje = 0.05;
                        break;

                    case 2:
                        tipo = 'SUV';
                        porcentaje = 0.08;
                        break;

                    case 3:
                        tipo = 'Pick-up / Camioneta';
                        porcentaje = 0.12;
                        break;

                    default:
                        console.log('La opción seleccionada no existe.');
                        rl.close();
                        return;
                }

                let prima = precio * porcentaje;
                let fecha = new Date().toLocaleString();

                console.log('\n===== REPORTE DE COTIZACIÓN =====');
                console.log(`Fecha: ${fecha}`);
                console.log(`Cliente: ${nombre}`);
                console.log(`Vehículo: ${vehiculo}`);
                console.log(`Tipo: ${tipo}`);
                console.log(`Valor del vehículo: $${precio.toFixed(2)}`);
                console.log(`Prima anual: $${prima.toFixed(2)}`);
                console.log(`Total anual: $${prima.toFixed(2)}`);

                rl.close();
            });
        });
    });
});
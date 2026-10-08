const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese el nombre del huésped: ', (entradaNombre) => {

    let nombre = entradaNombre.trim();

    rl.question('Ingrese la cantidad de noches: ', (entradaNoches) => {

        let noches = parseInt(entradaNoches);

        if (isNaN(noches) || noches <= 0) {
            console.log('La cantidad de noches no es válida.');
            rl.close();
            return;
        }

        rl.question('Ingrese la tarifa base por noche: $', (entradaTarifa) => {

            let tarifaBase = parseFloat(entradaTarifa);

            if (isNaN(tarifaBase) || tarifaBase <= 0) {
                console.log('La tarifa ingresada no es válida.');
                rl.close();
                return;
            }

            console.log('\n===== TEMPORADA DE RESERVA =====');
            console.log('1. Temporada Baja - Sin recargo');
            console.log('2. Temporada Media - Recargo del 15%');
            console.log('3. Temporada Alta - Recargo del 35%');

            rl.question('Seleccione una opción: ', (entradaOpcion) => {

                let opcion = parseInt(entradaOpcion);
                let tarifaNoche;
                let temporada;

                switch (opcion) {

                    case 1:
                        temporada = 'Temporada Baja';
                        tarifaNoche = tarifaBase;
                        break;

                    case 2:
                        temporada = 'Temporada Media';
                        tarifaNoche = tarifaBase * 1.15;
                        break;

                    case 3:
                        temporada = 'Temporada Alta';
                        tarifaNoche = tarifaBase * 1.35;
                        break;

                    default:
                        console.log('La opción de temporada no existe.');
                        rl.close();
                        return;
                }

                let totalHospedaje = tarifaNoche * noches;

                let descuento = 0;

                if (noches >= 5) {
                    descuento = totalHospedaje * 0.10;
                } else {
                    descuento = 0;
                }

                let subtotal = totalHospedaje - descuento;

                let impuesto = subtotal * 0.05;

                let totalFinal = subtotal + impuesto;

                let totalRedondeado = Math.ceil(totalFinal);

                let fechaCheckout = new Date();
                fechaCheckout.setDate(fechaCheckout.getDate() + noches);

                console.log('\n===== REPORTE DE HOSPEDAJE =====');
                console.log(`Huésped: ${nombre}`);
                console.log(`Noches: ${noches}`);
                console.log(`Temporada: ${temporada}`);
                console.log(`Tarifa por noche: $${tarifaNoche.toFixed(2)}`);
                console.log(`Total del hospedaje: $${totalHospedaje.toFixed(2)}`);
                console.log(`Descuento: $${descuento.toFixed(2)}`);
                console.log(`Impuesto de turismo: $${impuesto.toFixed(2)}`);
                console.log(`Total final: $${totalFinal.toFixed(2)}`);
                console.log(`Total redondeado hacia arriba: $${totalRedondeado}`);
                console.log(`Fecha de check-out: ${fechaCheckout.toLocaleDateString()}`);

                rl.close();
            });
        });
    });
});
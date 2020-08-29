const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const { getLugarLatLng } = require('./lugar/lugar');

const argv = require('yargs').options({
    direccion: {
        demand: true,
        alias: 'd',
        desc: 'Dirección de laciudad oara obtener el clima'
    }
}).argv;

// lugar.getLugarLatLng( argv.direccion )
//     .then( console.log  )
//     .catch( console.log );

// clima.getClima(35, 139)
//         .then( console.log )
//         .catch( console.log );

const getInfo = async direccion => {

    try {
        const resp = await lugar.getLugarLatLng(direccion);
        const temperatura = await clima.getClima(resp.lat, resp.lng);

        return `El clima de ${resp.direccion} es de ${temperatura} ºC`;

    } catch (error) {
        return `No se pudo determinar el clima de ${direccion}`;

    }

};

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);


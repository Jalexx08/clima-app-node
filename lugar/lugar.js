const axios = require('axios');


const getLugarLatLng = async (dir) => {


    encodeUrl = encodeURI(dir);

    let url = `https://geocode.xyz/?locate=location?city=${encodeUrl}&auth=807417069809354722274x127458&json=1`;

    const response = await axios.get(url);

    if (response.data.matches === null) throw new Error(`No hay resultados para ${dir}`);

    const data = response.data.alt.loc;

    const direccion = data.city;
    const lat = data.latt;
    const lng = data.longt;

    return {
        direccion,
        lat,
        lng
    };

};

module.exports = {

    getLugarLatLng
};




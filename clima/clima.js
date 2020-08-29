
const axios = require('axios');



const getClima = async (lat, lng ) => {

url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=117066c2440520aa1ee5a70b23e32565&units=metric`;

const resp = await axios.get( url );

return resp.data.main.temp;
};

module.exports = {
    getClima
};
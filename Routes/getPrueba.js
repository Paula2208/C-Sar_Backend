const {encryptEspagnol} = require('../src/handlers/encryptEspagnol');

const prueba = async (req, res) => {
    const text = 'Hola Mundo'
    const base = 3;
    const p = await encryptEspagnol(text, base)
    res.send(`<h1> Entró a Encripto </h1> <p> Texto a Encriptar -> ${text} <br> Texto Encriptado -> ${p.body}  <br>  Key de Encripto -> ${base} </p>`);
}

module.exports = {prueba};
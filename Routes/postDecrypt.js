const {decryptEspagnol} = require('../src/handlers/decryptEspagnol');
const {decryptEnglish} = require('../src/handlers/decryptEnglish');

const decryptEsp = (req , res) => {

    const text = 'Hola Mundo';
    const base = 3;
    const p = await encryptEspagnol(text, base)

};

const decryptEng = (req , res) => {

};

module.exports = {decryptEsp, decryptEng};
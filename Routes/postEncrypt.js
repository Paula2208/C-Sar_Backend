const {encryptEspagnol} = require('../src/handlers/encryptEspagnol');
const {encryptEnglish} = require('../src/handlers/encryptEnglish');

const encryptEsp = async(req , res) => {

    const text = req.body.text;
    const base = req.body.base;
    let statusCode;
    let response;

    try {

        const p = await encryptEspagnol(text, base)
        statusCode = p.statusCode;
        response = {
            encrypt: p.body
        }
        
    } catch (error) {
        statusCode = error.status;
        response = {
            error: error.error
        }
    }

    res.status(statusCode);
    res.json(response);

};

const encryptEng = async(req , res) => {

    const text = req.body.text;
    const base = req.body.base;
    let statusCode;
    let response;

    try {

        const p = await encryptEnglish(text, base)
        statusCode = p.statusCode;
        response = {
            encrypt: p.body
        }
        
    } catch (error) {
        statusCode = error.status;
        response = {
            error: error.error
        }
    }

    res.status(statusCode);
    res.json(response);

};

module.exports = {encryptEsp, encryptEng};
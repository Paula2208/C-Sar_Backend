const {decryptEspagnol} = require('../src/handlers/decryptEspagnol');
const {decryptEnglish} = require('../src/handlers/decryptEnglish');

const decryptEsp = async(req , res) => {

    const text = req.body.text;
    const base = req.body.base;
    let statusCode;
    let response;

    try {

        const p = await decryptEspagnol(text, base)
        statusCode = p.statusCode;
        response = {
            decrypt: p.body
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

const decryptEng = async(req , res) => {

    const text = req.body.text;
    const base = req.body.base;
    let statusCode;
    let response;

    try {

        const p = await decryptEnglish(text, base)
        statusCode = p.statusCode;
        response = {
            decrypt: p.body
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

module.exports = {decryptEsp, decryptEng};
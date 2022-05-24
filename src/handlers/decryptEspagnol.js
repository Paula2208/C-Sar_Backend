const {digitsEspagnol, alphaLenght, letterEspagnol} = require('../languages/espagnol');
const {decrypt}  = require('../functions/decrypt');

const decryptEspagnol = async (text, key) => {
    return new Promise((resolve, reject) => {
        digitsEspagnol(text)
            .then((results) => {
                return decrypt(results, key, alphaLenght());
            })
            .then((results) => {
                return letterEspagnol(results);
            })
            .then((results) => {
                resolve({
                    statusCode: 200,
                    body: results
                })
            })
            .catch((error) => {
                console.log(error);
                reject(error);
            });
    })
};

module.exports = {decryptEspagnol};

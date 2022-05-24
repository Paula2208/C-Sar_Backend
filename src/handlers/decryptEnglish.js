const {digitsEnglish, alphaLenght, letterEnglish} = require('../languages/english');
const {decrypt}  = require('../functions/decrypt');

const decryptEnglish = async (text, key) => {
    return new Promise((resolve, reject) => {
        digitsEnglish(text)
            .then((results) => {
                return decrypt(results, key, alphaLenght());
            })
            .then((results) => {
                return letterEnglish(results);
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

module.exports = {decryptEnglish};

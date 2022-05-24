const {digitsEnglish, alphaLenght, letterEnglish} = require('../languages/english');
const {encrypt}  = require('../functions/encrypt');

const encryptEnglish = async (text, key) => {
    return new Promise((resolve, reject) => {
        digitsEnglish(text)
            .then((results) => {
                return encrypt(results, key, alphaLenght());
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

module.exports = {encryptEnglish};

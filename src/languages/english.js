const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const indexEnglish = (letter) => {
    const index = alphabet.indexOf(letter);
    return (index === -1) ? 'Not available' : index;
};

const letEnglish = (id) => {
    return (id !== ' ') ? alphabet[id] : ' ';
};

const array = (paragraph) => {
    return new Promise((resolve, reject) => {
        const p = paragraph.toLowerCase();
        const digits = [];

        for(let s of p){
            if(s === ' '){
                digits.push(s);
            }
            else{
                let d = indexEnglish(s);
                if(d !== 'Not available'){
                    digits.push(d);
                }
                else{
                    reject(`Character ${s} not available.`);
                    return;
                }
            }
        }

        resolve(digits);
        return;
    })
};

const digitsEnglish = (text) => {
    return new Promise((resolve, reject) => {
        array(text)
            .then((results) => {
                resolve(results);
            })
            .catch((err) =>{
                reject({
                    status: 400,
                    error: err
                });
            });
    })
};

const alphaLenght = () => {
    return alphabet.length;
};

const letterEnglish = (nums) => {
    return new Promise((resolve,reject) => {
        let letters = '';
        nums.forEach((n) => {
            let s = letEnglish(n);
            letters = letters + s;
        })
        resolve(letters);
    })
};

module.exports = {alphaLenght, letterEnglish, digitsEnglish};
const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n','ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const indexEspagnol = (letter) => {
    if(!alphabet.includes(letter)){
        return 'Not available';
    }
    else{
        return alphabet.indexOf(letter);
    }
};

const letEspagnol = (id) => {
    if(!(id === ' ')){
        return alphabet[id]
    }
    else{
        return ' ';
    }
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
                let d = indexEspagnol(s);
                if(!(d === 'Not available')){
                    digits.push(d);
                }
                else{
                    reject(`Caracter ${s} no disponible.`);
                    return;
                }
            }
        }

        resolve(digits);
        return;
    })
};

const digitsEspagnol = (text) => {
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

const letterEspagnol = (nums) => {
    return new Promise((resolve,reject) => {
        let letters = '';
        nums.forEach((n) => {
            let s = letEspagnol(n);
            letters = letters + s;
        })
        resolve(letters);
    })
};

module.exports = {alphaLenght, letterEspagnol, digitsEspagnol};
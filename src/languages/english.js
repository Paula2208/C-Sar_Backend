const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//No se toman en cuenta las tildes ni mayúsculas

const indexInglish = (letter) => {
    if(!alphabet.includes(letter)){
        return marks(letter);
    }
    else{
        return alphabet.indexOf(letter);
    }
};

const marks = (m) => {
    if(letter === ' '){
        return -2;
    }
    if(letter === '.'){
        return -3;
    }
    if(letter === ','){
        return -4;
    }
    if(letter === ':'){
        return -5;
    }
    if(letter === ';'){
        return -6;
    }
    else{
        return `Not available`;
    }
};

const array = (paragraph) => {
    return new Promise((resolve, reject) => {
        const p = paragraph.toLowerCase();
        const digits = [];

        for(let s of p){
            let d = indexInglish(s);
            if(!(d === 'Not available')){
                digits.push(d);
            }
            else{
                reject(`Character ${s} not available.`);
                return;
            }
        }

        resolve(digits);
        return;
    })
};

export const digitsEnglish = (text) => {
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
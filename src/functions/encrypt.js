const c_encrypt = (num, key, alpha) => {
    return (num + key) % alpha;
};

const encrypt = (numArray, key, alpha) => {
    return new Promise((resolve, reject) => {
        let result = [];
        let e;
        numArray.forEach(element => {
            if(element === ' '){
                result.push(element);
            }
            else{
                e = c_encrypt(element, key, alpha);
                result.push(e);
            }
        });
        resolve(result);
    })
};

module.exports = {encrypt};
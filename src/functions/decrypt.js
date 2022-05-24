const c_decrypt = (num, key, alpha) => {
    return (num - key) % alpha;
};

const decrypt = (numArray, key, alpha) => {
    return new Promise((resolve, reject) => {
        let result = [];
        let e;
        numArray.forEach(element => {
            if(element === ' '){
                result.push(element);
            }
            else{
                e = c_decrypt(element, key, alpha);
                result.push(e);
            }
        });
        resolve(result);
    })
};

module.exports = {decrypt};
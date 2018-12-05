
const p = new Promise((resolve, reject) => {

    setTimeout(() => {
        //resolve(1);
        reject(new Error("Hataaa"));
    }, 2000);

});

p
    .then(result => console.log('Result ' + result))
    .catch(error => console.log(error));

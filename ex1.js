function esDivisibleEntreDos(nombre) {
    return new Promise((resolve, reject) => {
        if (nombre % 2 === 0) {
            resolve(`${nombre} és divisible entre dos.`);
        } else {
            reject(`${nombre} no és divisible entre dos.`);
        }
    });
}

// Prova
esDivisibleEntreDos(10)
    .then(result => console.log(result))
    .catch(error => console.log(error));
    
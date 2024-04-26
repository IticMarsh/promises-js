let promesaValor = new Promise((resolve, reject) => {
    let valor = 5;
    if (valor >= 0 && valor <= 10) {
        resolve(`${valor} és entre 0 i 10.`);
    } else {
        reject(`${valor} no és entre 0 i 10.`);
    }
});

// Prova
promesaValor
    .then(result => console.log(result))
    .catch(error => console.log(error));

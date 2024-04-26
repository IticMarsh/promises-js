function esVocal(letra) {
    let arr = ["a", "e", "i", "o", "u"];
    return new Promise((resolve, reject) => {
        if (arr.includes(letra)) {
            resolve(`${letra} és una vocal.`);
        } else {
            reject(`${letra} no és una vocal.`);
        }
    });
}

// Prova
esVocal("e")
    .then(result => console.log(result))
    .catch(error => console.log(error));

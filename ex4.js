function calcularDivisio(num1, num2) {
    return new Promise((resolve, reject) => {
        if (num2 !== 0) {
            resolve(num1 / num2);
        } else {
            reject("Error: No es pot dividir per zero.");
        }
    });
}

// Prova
calcularDivisio(10, 5)
    .then(result => console.log("Quocient:", result))
    .catch(error => console.log(error));

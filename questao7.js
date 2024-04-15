function somar (array) {
    let soma = array.reduce((total, Valores) => total + Valores, 0)
    return soma;
}
console.log(somar([7,7,7,7,7]))

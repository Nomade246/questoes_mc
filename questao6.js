function double (arrayValores) {
    let arrayDouble = arrayValores.map(Valor => Valor * 2)
    return arrayDouble
}
console.log(double([1, 2, 3, 4, 5]))
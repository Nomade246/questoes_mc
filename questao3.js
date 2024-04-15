function soma (num1, num2, num3) {
    let numeros = [num1, num2, num3]
    numeros.sort((a, b) => b - a)
    return numeros[0] + numeros[1]
}
console.log(soma(17, 16, 14))
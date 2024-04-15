function Divisor (Valor) {
    if (Valor % 2 == 0 && Valor % 3 == 0) {
        console.log (" foobar ")
    } else if (Valor % 2 == 0) {
        console.log (" foo ")
    } else if (Valor % 3 == 0) {
        console.log (" bar ")
    } else {
        console.log(Valor + " não é divisível nem por 2 nem por 3")
    }
}
Divisor(24)
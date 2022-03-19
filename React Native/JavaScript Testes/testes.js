let num1 = 6
let num2 = 3
let resultado = ""

function somar (num1,num2){
    let resultado = num1 + num2 
    return resultado
}   

resultado = somar (num1, num2)

if (somar(num1,num2) >= 5) {
    console.log(`o resultado da soma é ${resultado}`)
} else {
    console.log ('o número não atingiu a meta')
}
    


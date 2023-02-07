
// Descobrir se um número é par ou ímpar -----------------

function parimpar(n) {
    if (n%2 == 0) {
        return 'Par!'
    } else {
        return 'Ímpar!'
    }
}


// Acionando a função e inserindo o valor 4
// O número "4" é par ou ímpar?

var res = parimpar(4)

//Print da resposta
console.log(res)





// Soma de valores -----------------------------------


function soma(n1, n2) {
    return n1 + n2
}

var sum = soma(2, 5)
console.log(sum)





// Multiplicação de valores -----------------------------------

var v = function(x) {
    return x*2
}

console.log(v(5))



// Fatorial  -----------------------------------


//Enquanto contador for maior que "1", contador perde "1"

function fatorial(n) {
    let fatorial = 1
    for(let c = n; c > 1; c--) {
        fatorial *= c
    }
    return fatorial
}

console.log(fatorial(5))

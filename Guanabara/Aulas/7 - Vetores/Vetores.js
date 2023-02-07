

// Criação do vetor
let valores = [8, 1 , 7 , 2, 9]


//--------------------------------------------------------------

//print dos valores


//'contador' recebe 0; enquanto contador for menor do que a quantidade de valores no vetor; faça 'contador + 1'.

for (let contador = 0; contador < valores.length;contador++) {
    console.log(`A posição ${contador} tem o valor ${valores[contador]}`)
}

// DUAS VERSÕES PARA ESCRITA DO CÓDIGO

// Para cada posição dentro de 'valores' , vou mostrar o valores[contador]

for (let contador in valores) {
    console.log(`A posição ${contador} tem o valor ${valores[contador]}`)
}


//--------------------------------------------------------------

// Contador recebe a posição em que está o valor '8'

let contador = valores.indexOf(8)


// Se o contador receber (-1) significa que o valor não existe dentro do vetor
if (contador == -1) {
    console.log(`O valor não foi encontrado`) 
} else {
console.log(`O valor 8 está na posição ${contador}`)
}

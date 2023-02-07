
//(WHILE)
// ENQUANTO 'contador' for menor que 6, faça o print do texto: 'Tudo bem?'

var contador = 1
while (contador <= 6 ) {
    console.log('Tudo bem?')
    contador = contador + 1
}


//(DO WHILE)
// FAÇA o print do 'passo x' até que o contador seja igual ou menor a 6.

var contador = 1
do {
    console.log(`Passo ${contador}`)
    contador = contador + 1
} while (contador <= 6)


//FOR (inicio; teste lógico; incremento)

for (var contador = 1; contador <= 5; contador = contador + 1) {
    console.log(contador)
}
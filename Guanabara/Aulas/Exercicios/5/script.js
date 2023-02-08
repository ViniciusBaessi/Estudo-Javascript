

// Criando vetor como variável global
let vetor = [];



function adicionar() {

    // Apagando print anterior, caso haja

    res.innerHTML = ``

    //Associando os inputs a variáveis
    var num = window.document.getElementById('txtn')
    let seln = document.getElementById('selnum')

    
    //----------------------------------------------------------

    //Pegando o valor digitado pelo usuário e colocando na var "valor"
    var valor = Number(txtn.value)

    //----------------------------------------------------------

    //Validação 

    

       //vazio                       //Repetido?       // ultrapassa 100
    if (num.value.length == 0 || vetor.indexOf(valor) !== -1 || valor > 100) {
    window.alert('Valor inválido ou já encontrado na lista!')
    return
    } 

//----------------------------------------------------------
  

   // Se a variável contador for diferente de undefined (se ela existir), faça o vetor receber o valor e contador recebe +1
   
   if (typeof contador !== "undefined") {
    vetor[contador] = valor;
    contador = contador + 1
   } 

   // Se a variável contador não for difente de undefined (se ela não existir), crie a variável contador e faça o vetor receber o valor +1
   
   else {
    contador = 0
    vetor[contador] = valor;
    contador = contador + 1
   }
   
   //----------------------------------------------------------
   
   // O print será enviado para tag optioin
    let item = document.createElement('option')
        item.text += `Valor (${valor}) adicionado na ${contador}º casa. `

    //A tag option poderá receber o print e exibi-lo
    seln.appendChild(item)

    
}










function print() {

      
    //Associando os inputs a variáveis
    var res = window.document.getElementById('res')
    var num = window.document.getElementById('txtn')


    // Apagando print anterior, caso haja

    res.innerHTML = ``

    //----------------------------------------------------------


    //VALIDAÇÃO

    if (num.value.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
        return
    }

    //----------------------------------------------------------
    

    // TOTAL DE VALORES

    //Armazenando o valor total de dados no vetor dentro da var "total"
    var total = vetor.length
   
    // Print do total na tela
    res.innerHTML += `Ao todo, temos ${total} números cadastrados!`

    //----------------------------------------------------------


    // MAIOR VALOR  
    
    var contador = 0
    var maior = 0

    //Enquanto contador for menor que o total de valores do vetor, faça: Se o valor do fator for maior que o valor na var "maior", a var maior recebe o valor do fator. Ao final faça um print do valor dentro da var "maior"

    while (contador < total ) {
        
        if (vetor[contador] > maior) {
            maior =  vetor[contador]
        }

        contador = contador + 1
    }
    
    res.innerHTML += `<p> O maior valor informado foi ${maior}. </p>`

     //----------------------------------------------------------


    // MENOR VALOR  

    // A var "menor" vai receber o primeiro valor do vetor
    var contador = 0
    var menor = vetor[1]



    //Enquanto contador for menor que o total de valores do vetor, faça: Se o valor do fator for menor que o valor na var "menor", a var menor recebe o valor do fator. Ao final faça um print do valor dentro da var "menor"


    while (contador < total ) {
        
        
        if (vetor[contador] < menor) {
            menor =  vetor[contador]
        }

        contador = contador + 1
    }
    
    res.innerHTML += `<p> O menor valor informado foi ${menor}. </p>`


    //----------------------------------------------------------


     // SOMA DOS VALORES 

    var contador = 0
    var soma = 0
   

    while (contador < total ) {
        
        soma = vetor[contador] + soma

        contador = contador + 1
    }
    
    res.innerHTML += `<p> Somando todos os valores, temos ${soma}. </p>`

 //----------------------------------------------------------


    // MEDIA DOS VALORES

    var media = 0

    media = soma / total

    // (media.toFixed(2)) define a quantidade de casas decimais
    
    res.innerHTML += `<p> A média dos valores digitados é ${(media.toFixed(2))}. </p>`
}
function adicionar() {


    //Associando os inputs a variáveis
    var num = window.document.getElementById('txtn')
    let seln = document.getElementById('selnum')


    //Pegando o valor digitado pelo usuário e colocando na var "valor"
    var valor = Number(txtn.value)

    // Criando vetor
    let vetor = [];


    //Validação 


       //vazio                       //Repetido?       // ultrapassa 100
    if (num.value.length == 0 || vetor.length === 0 || valor > 100) {
    window.alert('Valor inválido ou já encontrado na lista')
    } 


    //colocando o dado "valor" dentro do vetor
    vetor.push(valor)


    console.log(vetor); // Output: [1, 2, 3]





}
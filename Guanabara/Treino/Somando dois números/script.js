function soma() {

    //Linkando elementos do HTML ao javascript  --------------------------

    var n1 = window.document.getElementById('n1')
    var n2 = window.document.getElementById('n2')
    var res = window.document.getElementById('res')


    //Pegando valores inseridos pelo usuário --------------------------
    var num1 = Number(n1.value)
    var num2 = Number(n2.value)


    //Somando valores  --------------------------
    var soma = num1 + num2


    //Se nenhum número for digitado, resultará em erro  --------------------------
    if (n1.value.length == 0 && n2.value.length == 0) {
        window.alert('[ERRO] A soma de 0, ou nenhuma valor, resulta em nulo')
        return
    } 
    
    //Print do resultado  --------------------------
    res.innerHTML = `<p>A soma dos valores é ${soma}! </p>`
}
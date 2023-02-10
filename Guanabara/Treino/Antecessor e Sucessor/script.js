function avançar() {

    //Linkando elementos do HTML ao javascript  --------------------------
    var txtn = window.document.getElementById('txtn')
    var res = window.document.getElementById('res')

   
    //Pegando valores inseridos pelo usuário --------------------------
    var num = Number(txtn.value)



    //Validando se pode prosseguir com o código
    if (txtn.value.length == 0) {
        window.alert('[ERRO] Digite algo antes de avançar!')
        return
    } 

    //Apagando prints anteriores, caso haja.
    res.innerHTML = ``

    var soma = num + 1
    var sub = num - 1

    res.innerHTML = `<p> Analisando o valor (${num}), seu antecessor é o (${sub}) e o sucessor é o( ${soma}). </p>`


}
function calcular() {
    
    //Linkando elementos do HTML ao javascript  --------------------------
    var txtn = window.document.getElementById('txtn')
    var res = window.document.getElementById('res')

   
    //Pegando valores inseridos pelo usuário --------------------------
    var num = (txtn.value)

    //Validando se pode prosseguir com o código
    if (txtn.value.length == 0) {
        window.alert('[ERRO] Digite algo antes de inspecionar!')
        return
    } 
    //Apagando prints anteriores, caso haja.
    res.innerHTML = ``




    var dobro = num *2
    var triplo = num * 3
    var raizq = Math. sqrt(num) 

    

    
    res.innerHTML += `
    <p> O dobro de ${num} é ${dobro}. </p>
    <p> O triplo de ${num} é ${triplo}. </p>
    <p> A raiz quadrada de ${num} é igual a ${raizq.toFixed(2)} </p>
    `
}
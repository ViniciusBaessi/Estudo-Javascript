function tabuada() {

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



     // Calculo da tabuada
    
     var contador = 0
     
     while (contador < 11) {
        res.innerHTML += ` ${contador} x ${num} = ${contador*num} <br>`
        contador = contador + 1

     }

        
}
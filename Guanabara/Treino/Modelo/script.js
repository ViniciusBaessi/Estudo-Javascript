function aaa() {

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
}
function PintandoParede() {

    //Linkando elementos do HTML ao javascript  --------------------------
    var txtl = window.document.getElementById('txtl')
    var txta = window.document.getElementById('txta')
    var res = window.document.getElementById('res')

   
    //Pegando valores inseridos pelo usuário --------------------------
    var larg = (txtl.value)
    var alt = (txta.value)

    //Validando se pode prosseguir com o código
    if (txtl.value.length == 0 || txta.value.length == 0 ) {
        window.alert('[ERRO] Digite algo antes de inspecionar!')
        return
    } 
    //Apagando prints anteriores, caso haja.
    res.innerHTML = ``

    var dimensao = larg * alt
    var tinta = (dimensao/2)

    
    res.innerHTML += `<p> A sua parede tem a dimensão de (${larg} x ${alt}) e a sua área é de ${dimensao}m². </p>`

    res.innerHTML += `<p> Para pintar essa parede, você precisará de ${tinta}L de tinta. </p>`

}
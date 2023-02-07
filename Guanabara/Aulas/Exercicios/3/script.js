function  contar() {

    //Colocando tags do HTML em variáveis ----------------------

    var ini = window.document.getElementById('txtnum1')
    var fim = window.document.getElementById('txtnum2')
    var pas = window.document.getElementById('passo')
    var res = window.document.getElementById('res')

    //Colocando o valor digitado pelo user nas tags, dentro das variáveis
    var cont1 = Number(ini.value)
    var cont2 = Number(fim.value)
    var passo = Number(pas.value)

    

    //Validação se a contagem pode ser iniciada
    if (cont2 <= cont1 || cont1 === 0 || cont2 === 0) {
        alert('Número inválido para contagem')
        return
    } 



    // Se o passo for 0 ele automáticamente vira 1 -----------
    if  (passo === 0) {
        passo = passo + 1
    }


    // Limpa tela --------------------------------------------------------
    res.innerHTML = ``





    //Início da contagem ----------------------------------------------

    if (cont1 > 1 && passo > 1) {
        var contador = cont1

        while (contador <= cont2) {

            res.innerHTML += `👉    ${contador}       `
            contador = contador + passo
            } 
    }



    else if (passo > 1) {
        var contador = cont1 - 1

        while (contador <= cont2) {
            res.innerHTML += `👉    ${contador}       `
            contador = contador + passo 
            } 
    } 


    else if (passo == 1) {
        var contador = cont1

        while (contador <= cont2) {
            res.innerHTML += `👉    ${contador}       `
            contador = contador + passo
            }
    } 
    
    


    //Colocando um caractere na última saída do loop
    res.innerHTML += "🏴"

}

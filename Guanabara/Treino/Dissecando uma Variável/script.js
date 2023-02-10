function inspect() {

    //Linkando elementos do HTML ao javascript  --------------------------
    var txt = window.document.getElementById('txt')
    var res = window.document.getElementById('res')

   
    //Pegando valores inseridos pelo usuário --------------------------
    var inp = (txt.value)

    //Validando se pode prosseguir com o código
    if (txt.value.length == 0) {
        window.alert('[ERRO] Digite algo antes de inspecionar!')
        return
    } 
    //Apagando prints anteriores, caso haja.
    res.innerHTML = ``



    // Função para identificar se é um número ou caractere.
    var numero
    var tipo
    if (parseInt(inp) > 0){
        numero = numero + 1 
        tipo = 'Number'
    } else {
        tipo = 'String'
    }
 

    //O comando split(" ") verifica a quantidade de espaços dentro de uma variável, length - 1;= desconsidera o último espaço após a última palavra.

    var espaco = inp.split(" ").length - 1;
    var soespaco = (inp.trim().length === 0);

    

    // Print
    

    //Tipo de var
    res.innerHTML += 
    `<p> O tipo deste valor é ${tipo}. </p>`


    //Quantidade de espaços
    if (soespaco > 0) {
        res.innerHTML += `<p> O texto possui (${espaco}) espaços e é composto apenas de espaços! </p>`
    } else {
        res.innerHTML += `O texto possui (${espaco}) espaços e não é composto apenas de espaços!`
    }

    //É um númeto ou um texto
    if (tipo == 'Number') {
        res.innerHTML += `<p> É um número! </p>`
    } else {
        res.innerHTML += `<p> É composto de letra(s)! </p>`
    }


    //Verifica se tem letras maiúsculas
    // O comando /[A-Z]/.test verifica se há letras maiúsculas no a variável
    var mai = /[A-Z]/.test(inp);
    var pmai = inp.charAt(0)

    if (mai) {
        res.innerHTML += `<p> Possui letras maiúsculas </p>`
    }


    //Verifica se a primeira letra é maiúscula
    if (pmai === pmai.toUpperCase()) {
        res.innerHTML += `<p> A primeira letra da está em maiúsculo. </p>`
    }
    else {
        res.innerHTML += `<p> Não possui letras maiúsculas! </p>`
    }
}


    

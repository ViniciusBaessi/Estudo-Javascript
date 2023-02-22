//Limpa o localstorage
//localStorage.clear()


function adicionar_dados () {


    //Linkando o form de nome em uma variável
    var nome = window.document.getElementById('nome')
    var idade = window.document.getElementById('idade')

    //Criando um objeto chamado (usuário) e preenchendo com os dados inputados pelo usuário
    const usuario = { nome: `${nome.value}`, idade: `${idade.value}` };



    //O objeto (usuario) é convertido em uma string JSON usando o método JSON.stringify(). Em seguida, a string resultante é armazenada no localStorage com a chave "usuario" usando o método setItem().

    const usuarioJSON = JSON.stringify(usuario);
    localStorage.setItem("usuario", usuarioJSON);


    //Neste exemplo, a string JSON correspondente ao objeto usuario é recuperada do localStorage usando o método getItem(). Em seguida, a string é convertida em um objeto usando o método JSON.parse(). Por fim, podemos acessar as propriedades do objeto normalmente.
    const usuarioJSON1 = localStorage.getItem("usuario");
    const usuario1 = JSON.parse(usuarioJSON);
   




    var usuarios = []

    usuarios = usuario.nome



    

    //Printando na tela
    res.innerHTML += `<strong> Nome: ${usuario1.nome} | Idade: ${usuario1.idade} </strong> <br>`
    
    res.innerHTML += `<strong> Nome: ${usuarios[0]} </strong> <br>`
}
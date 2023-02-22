//Limpa o localstorage

function limpa_usuario () {

    //Limpa os dados
    localStorage.clear()

    //Faz o refresh da página
    location.reload()
}








//Linkando o form de nome em uma variável
var nome = window.document.getElementById('nome')
var idade = window.document.getElementById('idade')
var res = window.document.getElementById('res')
var contador = 0








ler_usuario ()







// ELABORAÇÃO DE UM CRUD (CREATE, READ, UPDATE, DELETE)



 //-------------------------- CREATE --------------------------------------------

function adicionar_usuario () {


    //Criando um objeto chamado (usuário) e preenchendo com os dados inputados pelo usuário
    const usuario = { nome: `${nome.value}`, idade: `${idade.value}` };

    
    //Vai ler os dados do (localstorage), converter para JSON e enviar para a variável (db_usuario). Se o banco estiver vazio, será criado um array novo
    const db_usuario = JSON.parse(localStorage.getItem('db_usuario')) ?? []

    // O array (db_usuario) receberá o objeto (usuario) que possui os inputados no formulário.
    db_usuario.push (usuario)


    //O comando converte os dados inseridos na variável (db_usuario) para string e envia para o (localstorage)
    localStorage.setItem("db_usuario", JSON.stringify(db_usuario))
    
    //Esvaziando o formulário para inserção de novos dados
    nome.value = ""
    idade.value = ""


    //Acionando a função ler dados
    ler_usuario()

    
}


//-------------------------- READ --------------------------------------------

function ler_usuario () {


    //Pega os dados do (localstorage) e convertendo para JSON
    const db_usuario = JSON.parse(localStorage.getItem('db_usuario')) 
    


    //Se o meu array > 0
    if (db_usuario.length > 0) {



    //Comando para acessar os dados do array e exibí-los na tela.
    do {
        res.innerHTML += `Nome: ${db_usuario[contador].nome} | idade: ${db_usuario[contador].idade} <br>`
        contador = contador + 1
    } while (contador < db_usuario.length)
        

    } else {
        res.innerHTML = "Não há dados <br>"
    }
    
    
}



 //-------------------------- UPDATE --------------------------------------------










 /*

 const atualizar_usuario = (index, user) => {

    //Pegar os dados usando a função (ler_usuario)
    const db_usuario = ler_usuario()

    //Vai selecionar o id do dado através do método (index)
    db_usuario[index] = user

    //Envia os dados para o (localstorage)
    enviar_dados(db_usuario)

    atualizar_usuario(0, usuario)
}






/* 

'use strict'


//Limpa o localstorage
localStorage.clear()







    //Linkando o form de nome em uma variável
    var nome = window.document.getElementById('nome')
    var idade = window.document.getElementById('idade')


    //-------------------------- OBJETO --------------------------------------------


    //Criando um objeto chamado (usuário) e preenchendo com os dados inputados pelo usuário
    


    //-------------------------- FUNÇÕES --------------------------------------------

    //A função (pegar_dados) vai ler os dados do (localstorage), converter para JSON e enviar para a variável inserida no parâmetro "()". Se o banco estiver vazio, será criado um array novo
    const pegar_dados = () => JSON.parse(localStorage.getItem('db_usuario')) ?? []


    //A função (enviar_dados) converte os dados inseridos na variável (db_usuario) para string e envia para o (localstorage)
    const enviar_dados = (db_usuario) => localStorage.setItem("db_usuario", JSON.stringify(db_usuario))




    //-------------------------- CREATE --------------------------------------------

    const criar_usuario = (user) => {


        const usuario = { 
            nome: "Pedro", 
            idade: "22"
        };

    // O array (db_usuario) recebe a função (pegar_dados) cuja a função foi descrita acima.
    const db_usuario = pegar_dados()

    // O array receberá os dados inputados pelo método. (que será o objeto usuario criado lá em cima)
    db_usuario.push (user)

    //Os novos dados de (db_usuario) serão enviados para o (localstorage) através da função (enviar_dados) cuja a função foi descrita acima.
    enviar_dados(db_usuario)

    criar_usuario(usuario)

    }
    



    //-------------------------- READ --------------------------------------------
    

    //A função (pegar_dados) possui a funcionalidade para ler os dados
    const ler_usuario = () => pegar_dados()

    ler_usuario(usuario)



    //-------------------------- UPDATE --------------------------------------------


    const atualizar_usuario = (index, user) => {

        //Pegar os dados usando a função (ler_usuario)
        const db_usuario = ler_usuario()

        //Vai selecionar o id do dado através do método (index)
        db_usuario[index] = user

        //Envia os dados para o (localstorage)
        enviar_dados(db_usuario)

        atualizar_usuario(0, usuario)
    }


    //-------------------------- DELETE --------------------------------------------

    const excluir_usuario = (index) => {

        //Faz a leitura dos dados
        const db_usuario = ler_usuario()

        // Exclui o dado de acordo com o seu id (index)
        db_usuario.splice(index,1)

        //Enviando os dados atualizados ao banco
        enviar_dados(db_usuario)
    }





*/
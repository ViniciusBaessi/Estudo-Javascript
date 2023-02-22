//Limpa o localstorage
localStorage.clear()







//Linkando o form de nome em uma variável
var nome = window.document.getElementById('nome')
var idade = window.document.getElementById('idade')





 //-------------------------- CREATE --------------------------------------------

function criar_usuario () {


    //Criando um objeto chamado (usuário) e preenchendo com os dados inputados pelo usuário
    const usuario = { nome: `${nome.value}`, idade: `${idade.value}` };

    const db_usuario = JSON.parse(localStorage.getItem('db_usuario')) ?? []

    db_usuario.push (usuario)

    localStorage.setItem("db_usuario", JSON.stringify(db_usuario))
    
    ler_usuario ()

}


//-------------------------- READ --------------------------------------------

function ler_usuario () {

    const db_usuario = JSON.parse(localStorage.getItem('db_usuario')) 





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
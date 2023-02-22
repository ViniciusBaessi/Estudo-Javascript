//Limpa o localstorage
//localStorage.clear()




function CRUD () {


    //Linkando o form de nome em uma variável
    var nome = window.document.getElementById('nome')
    var idade = window.document.getElementById('idade')


    //-------------------------- OBJETO --------------------------------------------


    //Criando um objeto chamado (usuário) e preenchendo com os dados inputados pelo usuário
    const usuario = { 
        nome: `aa`, 
        idade: `123` 
    };


    //-------------------------- FUNÇÕES --------------------------------------------

    //A função (pegar_dados) vai ler os dados do (localstorage), converter para JSON e enviar para a variável inserida no parâmetro "()". Se o banco estiver vazio, será criado um array novo
    const pegar_dados = () => JSON.parse(localStorage.getItem('db_usuario')) ?? []


    //A função (enviar_dados) converte os dados inseridos na variável (db_usuario) para string e envia para o (localstorage)
    const enviar_dados = (db_usuario) => localStorage.setItem("db_usuario", JSON.stringify(db_usuario))




    //-------------------------- CREATE --------------------------------------------

    const criarusuario = (user) => {

    // O array (db_usuario) recebe a função (pegar_dados) cuja a função foi descrita acima.
    const db_usuario = pegar_dados()

    // O array receberá os dados inputados pelo método. (que será o objeto usuario criado lá em cima)
    db_usuario.push (user)

    //Os novos dados de (db_usuario) serão enviados para o (localstorage) através da função (enviar_dados) cuja a função foi descrita acima.
    enviar_dados(db_usuario)

    }
    

    criarusuario(usuario)
    
    

    
}
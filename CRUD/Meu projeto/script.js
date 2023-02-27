//Limpa o localstorage

function limpa_dados () {
    //Limpa os dados
    localStorage.clear()
    //Faz o refresh da página
    location.reload()
}


//Linkando o form de nome em uma variável
var nome = window.document.getElementById('nome')
var idade = window.document.getElementById('idade')
var res = window.document.getElementById('res')
var msg = window.document.getElementById('msg')
var form = window.document.getElementById('salvar_alterar')

var contador = 0

//Exibindo os dados na tela.
ler_usuario ()



//--------------ELABORAÇÃO DE UM CRUD (CREATE, READ, UPDATE, DELETE)----------------------


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
    const db_usuario = JSON.parse(localStorage.getItem('db_usuario')) ?? []
    

    //Se o meu array maior que zero, faça o comando abaixo
    if (db_usuario.length > 0) {

        
    //Comando para acessar os dados do array e exibí-los na tela.
    do {
        
        msg.innerHTML = ``

        //Inserindo os dados na tela junto ao botão para UPDATE e DELETE
        res.innerHTML += 
        `Nome: ${db_usuario[contador].nome} | idade: ${db_usuario[contador].idade} 
        
        <button id="editar" data-indice="${contador}" onclick="altera_usuario()">Editar</button> <button id="excluir" onclick="exclui_usuario()">Excluir</button> <br>`
        

        contador = contador + 1
    } while (contador < db_usuario.length)
        
    //Se não houver dados no array, exiba a mensagem na tela
    } else {
        msg.innerHTML = "Ainda não há dados <br>"
    }
}





 //-------------------------- UPDATE --------------------------------------------



//Reconhecendo clicks feitos no body do HTML
document.querySelector('body').addEventListener('click', function(evento) {
    click(evento);
})


function altera_usuario() {

    //Retorna o valor do indice do botão que foi clicado e é armazenado na variável (indice)
    const indice = event.target.dataset.indice;

    //Pega os dados do (localstorage) e convertendo para JSON
    const db_usuario = JSON.parse(localStorage.getItem('db_usuario')) ?? []

    
    //Filtra os dados através da variável (indice) e insere os valores correspondentes no formulário
    nome.value = db_usuario[indice].nome
    idade.value = db_usuario[indice].idade



    // Remove o botão salvar
    if (document.getElementById('enviar')) {
        document.getElementById('enviar').remove()
        botao_alterar ()
}

//Aciona a função salvar_usuario apenas quando o borão alterar for clicado
document.getElementById('alterar').addEventListener('click', function() {
    salvar_usuario (indice)
});


}


function salvar_usuario (aux) {
    
    //Coleta os dados salvos no local storage, converte para JSON e salva na variável (db_usuario)
    const db_usuario = JSON.parse(localStorage.getItem('db_usuario'))

    //O objeto salvo na (db_usuario) recebe os dados inputados no formulário
    db_usuario[aux].nome = nome.value
    db_usuario[aux].idade = idade.value
    
    // Os dados na variável db_usuario são convertidos de JSON para string e é armazenado no localstorage
    localStorage.setItem("db_usuario", JSON.stringify(db_usuario));

    //É feito um reload na página para que o usuario possa realizar novas operações
    location.reload()
    }




function click (evento) {
    
    //Reconhecendo o click no botão editar através do id 
    if (evento.target.id == 'editar'){

        //Pegando o indice do botão através da função altera_usuario
        altera_usuario(evento);

        //Printa no console o valor do botão que foi clicado
        console.log(evento.target.dataset.indice);
        
    }
    
}

function botao_salvar () {
  
     form.innerHTML += `<input id="enviar" type="submit" value="Enviar" onclick="adicionar_usuario () ">`

    
}


function botao_alterar () {
  
    form.innerHTML += `<input id="alterar" type="submit" value="Alterar" onclick="salvar_usuario ()">`

}






 //-------------------------- DELETE --------------------------------------------


























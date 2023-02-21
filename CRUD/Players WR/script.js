// Criação do CRUD


function create () {


     //Pegando os valores inseridos pelo usuário e colocando-os em variáveis

    let nick = document.getElementById('nick').value;
    let main = document.getElementById('main').value;
    let rota = document.getElementById('rota').value;
    let tabela = document.getElementById("minhatabela");

    //Calculando o tamanho da Tabela para definição dos ID's
    let tabelasize = tabela.rows.length; 

    //Inserindo novas linhas na tabela com base no valor de ID's
    let linha = tabela.insertRow(tabelasize); 
    

     //Inserindo as colunas da linha
     let cell1 = linha.insertCell(0); 
     let cell2 = linha.insertCell(1);
     let cell3 = linha.insertCell(2);
     let cell4 = linha.insertCell(3);
     let cell5 = linha.insertCell(4);

     //O comando row.id = tableSize; serve para atribuir um ID único para cada nova linha inserida na tabela. Esse ID é baseado no tamanho atual da tabela (quantidade de linhas) e é incrementado a cada nova linha inserida.
     linha.id = tabelasize; 
     

    //Criando o botão para remover a linha que só aparece após a inserção de dados
    let botao_remover = "<button class='remove-botao' onclick='remover_linha(this)'>Remover</button>";


    //Preenchendo as celulas da linha
    cell1.innerHTML = tabelasize;
    cell2.innerHTML = nick;
    cell3.innerHTML = main;
    cell4.innerHTML = rota;
    cell5.innerHTML = botao_remover;

    //Limpando os campos de inserção de dados para que o usuário possa inserir novas informações
    document.getElementById('nick').value = "";
    document.getElementById('main').value = "";
    document.getElementById('rota').value = "";

    //Retornando 'false' para impedir o reload da pagina. Se a página recarregar, os dados serão perdidos
    return false;
}



//Função para remover uma linha


//Em resumo, a função pega o ID da linha a ser removida, encontra o elemento HTML correspondente e o remove da tabela. O uso de return false evita que a página seja recarregada, permitindo que o usuário continue interagindo com a tabela sem problemas.
function remover_linha(id){

    let linha = id.parentNode.parentNode.id; //Pegando o id do avô do botão
    linha = document.getElementById(linha); //Recebendo o elemento da linha pelo ID
    linha.parentNode.removeChild(linha); //Removendo a linha

    //Retornando 'false' para impedir o reload da pagina
    return false;
}

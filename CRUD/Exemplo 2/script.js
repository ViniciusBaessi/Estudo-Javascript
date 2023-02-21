//Função para adicionar uma nova linha na tabela

function adicionar_linha () {

    //Pegando os valores inseridos pelo usuário e colocando-os em variáveis

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let work = document.getElementById('work').value;
    let table = document.getElementById("myTable");

    //Calculando o tamanho da Tabela para definição dos ID's
    let tableSize = table.rows.length; 

    //Inserindo novas linhas na tabela com base no valor de ID's
    let row = table.insertRow(tableSize); 


    //Inserindo as colunas da linha
    let cell1 = row.insertCell(0); 
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    let cell6 = row.insertCell(5);



    //O comando row.id = tableSize; serve para atribuir um ID único para cada nova linha inserida na tabela. Esse ID é baseado no tamanho atual da tabela (quantidade de linhas) e é incrementado a cada nova linha inserida.
    row.id = tableSize; 

    //Criando o botão para remover a linha que só aparece após a inserção de dados
    let btnCode = "<button class='remove-btn' onclick='remover_linha(this)'>Remover</button>";


    
    //Preenchendo as celulas da linha
    cell1.innerHTML = tableSize;
    cell2.innerHTML = name;
    cell3.innerHTML = email;
    cell4.innerHTML = phone;
    cell5.innerHTML = work;
    cell6.innerHTML = btnCode;


      //Limpando os campos de inserção de dados para que o usuário possa inserir novas informações
      document.getElementById('name').value = "";
      document.getElementById('email').value = "";
      document.getElementById('phone').value = "";
      document.getElementById('work').value = "";


        //Retornando 'false' para impedir o reload da pagina. Se a página recarregar, os dados serão perdidos
        return false;
}


//Função para remover uma linha


//Em resumo, a função pega o ID da linha a ser removida, encontra o elemento HTML correspondente e o remove da tabela. O uso de return false evita que a página seja recarregada, permitindo que o usuário continue interagindo com a tabela sem problemas.
function remover_linha(id){

    let row = id.parentNode.parentNode.id; //Pegando o id do avô do botão
    row = document.getElementById(row); //Recebendo o elemento da linha pelo ID
    row.parentNode.removeChild(row); //Removendo a linha

    //Retornando 'false' para impedir o reload da pagina
    return false;
}


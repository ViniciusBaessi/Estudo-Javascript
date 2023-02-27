


//linkando a tag (ul) ao javascript e armazenando na variável de mesmo nome (ul).
const ul = document.querySelector('ul')


//Função que fará o procedimento
function getApiGitHub() {

    //O comando (fetch) faz uma requisição ao link da API onde a mesma fornece a lista de repositórios públicos do github
    fetch('https://api.github.com/users/viniciusbaessi/repos')

    //Executa a função após a chegada dos dados da API.
        .then(async res => {

        //Se a requisição tiver o status (ok / bem-sucedida) o cógido prosseguirá. Do contrário, aparecerá um erro na tela.
        if(!res.ok) {
            throw new Error(res.status)
        }

        //Converte a resposta recebida da API em um objeto JavaScript. O (await) é usado para aguardar a conversão dos dados antes de continuar.
        var data = await res.json()

        // (data.map(item => { ... }): Este comando percorre por cada item na lista de repositórios retornados pela API e executa uma função para cada item.
        data.map(item => {

            //Este comando cria um elemento de lista (li) para cada item no repositório.
            let li = document.createElement('li')

            // comando define o HTML dentro do elemento de lista recém-criado (li) com informações sobre o repositório. Ele inclui o nome do repositório (convertido em letras maiúsculas), a URL do repositório e a data de criação do repositório formatada para o padrão de data brasileiro.
            li.innerHTML = `
            <strong>${item.name.toUpperCase()}</strong>
            <span>URL: ${item.url}</span>
            <span>Data Criação: 
            ${Intl.DateTimeFormat('pt-BR')
                .format(new Date(item.created_at))}
            </span>
        `

        //Adiciona as informações presentes no (li) na tag (ul) do html
        ul.appendChild(li)

      })

      // Este comando captura quaisquer erros que possam ocorrer durante a busca de dados na API e os exibe no console.
    }).catch(e => console.log(e))
}

getApiGitHub()



// Inserindo o link da API na variável url, apenas para facilitar na ecrita do código.
const url = "https://naruto-api.fly.dev/api/v1/characters"


//Deixando o wiki oculto ao abrir a página
var section = document.getElementById("wiki");
section.style.display = "none";


//Linkando o form do input ao javascript
var num = document.getElementById('numero')




//Ao cliar em (escolher) a função que consome a API é executada

function Pegadados() {

    //Colocando o número digitado pelo usuário com parâmetro
    person = num.value

    //Esconde o formulário inicial
    var form = document.getElementById("form");
    form.style.display = "none";

    //Exibindo o wiki que estava oculto
    var section = document.getElementById("wiki");
    section.style.display = "flex";



    //Fazendo a requisioção dos dados da API
    axios.get(url)

    // Após receber a requisição com êxito, os dados serão colocados na variáveis seguites de acordo com o seu tipo
    .then(response => {

        const nomedata = response.data[person].name
        const fotodata = response.data[person].images[0]

        const lorebruta = response.data[person].about

        //Removendo caractere (") e (\) da lore
        const loredata = JSON.stringify(lorebruta).replace(/[\\"]/g, "")


        //Convertendo os dados para texto e printando no HTML por meio do id que está na tag (div).

        nome.textContent = JSON.stringify(nomedata)

        const foto = document.getElementById("foto")
        foto.src = fotodata

        lore.textContent = loredata

    })
    .catch(error => console.log(error))
}



function voltar() {
    location.reload()
}

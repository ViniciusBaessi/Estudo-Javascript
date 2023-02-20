
//CREATE --------------------------------------------------------------------

// Linkando a tag (form) na variável $meuForm
const $meuForm = document.querySelector('form')
console.log($meuForm)


//Toda vez que o botão enviar for clicado, faça a função ...
$meuForm.addEventListener('submit', function EnviaDadoController(InfosDoEvento) {

    // Faz com que a página não recarregue mantendo os eventos nela
    InfosDoEvento.preventDefault();

    // Linkando a tag (input) na variável $EnviaPost
    const $EnviaPost = document.querySelector('input[name="EnviaPost"]')

    // Linkando a tag (ul) na variável $ListaEnvio
    const $ListaEnvio = document.querySelector('.ListaEnvio')

    //Pritando a resposta após a tag ul, inserindo um (li)
    $ListaEnvio.insertAdjacentHTML('afterbegin',`<li>${$EnviaPost.value}</li>` )

    //Receber o valor, a variável fica fazia
    $EnviaPost.value = ''

    

})
console.log('Olá')


// Linkando a tag (form) na variável $meuForm
const $meuForm = document.querySelector('form')
console.log($meuForm)


//Toda vez que o botão enviar for clicado, faça a função ...
$meuForm.addEventListener('submit', function EnviaDadoController(InfosDoEvento) {

    // Faz com que a página não recarregue mantendo os eventos nela
    InfosDoEvento.preventDefault();
    console.log('Lararu')
})
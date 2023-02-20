var dados = []

var registro = {}


function PopulaTabela() {

    //Se a variável (dados) for um array, será feita a limpeza de linhas antigas da tabela e através de um loop será criada uma linha de tabela para cada slot do array

    if (Array.isArray(dados)) {
        $("#tblDados tbody").html("")
        dados.forEach(function (item) {
            $("#tblDados tbody").append(`
            <tr>
            <td>${item.ID}</td>
            <td>${item.Nickname}</td>
            <td>${item.Main}</td>
            <td>${item.DtNascimento}</td>
            <td>${item.Formacao}</td>
            </tr>`) // (append) adiciona conteúdos/tags HTML dentro da tbody
        })
    }
}


//Executa ao carregar a tela
$(function () {



    //Convertendo dados para JSON
    dados=JSON.parde(localStorage.getItem("__dados__"))

    if (dados) {
        PopulaTabela()
    }

})


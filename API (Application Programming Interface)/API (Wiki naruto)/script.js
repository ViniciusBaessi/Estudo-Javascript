








//Faça uma requisição usando o (fetch)

fetch('https://naruto-api.fly.dev/api/v1/characters')

//Após pegar o resultado, faça uma ação (comando then)
.then((res) => {

    //A acão é um if, se a promessa for recebida com sucesso, converta-o para JSON
    console.log(res)
    if(res.ok) {
        return res.json() 
    // Se houver falha no recebimento da requisição, aparece a seguinte mensagem.
    }else {
        console.log('Falha ao receber as informações')
    }
})
//Após converter os dados para json, faça (comando then) o print no console
.then((data) => console.log(data))


//O comando (catch) faz o tratamento de erro
.catch((err) => console.log(err))





/*
padrão da API

Fonte:
Nome:
id:
imagem
informações

*/

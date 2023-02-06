function verificar() {

    // Colocando a data atual na var 'data'
    var data = new Date()

    // Pegando o ano da var data e colocando na var 'ano'
    var ano = data.getFullYear()
    
    // Pegando o formulário 'ano de nascimento' e colocando na var 'fano'
    var fano = window.document.getElementById('txtano')

    // Área do print na var 'res'
    var res = window.document.getElementById('res')



    //Se o valor do forluário for igual a 0 ou maior que o ano atual
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados tente novamente')
    } 
    
    

    
    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')


        if (fsex[0].checked) {
            var genero = 'Homem'
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src','foto-bebe-m.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src','foto-jovem-m.png')
            }  else if (idade < 50) {
                //Adulto
                img.setAttribute('src','foto-adulto-m.png')
            } else {
                //Idoso
                img.setAttribute('src','foto-idoso-m.png')
            }



        } else if (fsex[1].checked) {
            var genero = 'Mulher'
            
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src','foto-bebe-f.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src','foto-jovem-f.png')
            }  else if (idade < 50) {
                //Adulto
                img.setAttribute('src','foto-adulto-f.png')
            } else {
                //Idoso
                img.setAttribute('src','foto-idoso-f.png')
            }
        }


        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }

}



const f_texto = document.querySelector("#f_texto")
const p_texto = document.querySelector("#p_texto")
const btn_texto = document.querySelector("#btn_texto")




let num = 10


//Limpa o localstorage
localStorage.clear()


//O comando (setItem) adiciona dados no (localstorage) que são armazenados de maneira permanente. O paâmetro é´(objeto, valor)

localStorage.setItem("champs",num)
localStorage.setItem("SUP","Galio")
localStorage.setItem("JG","Rengar")
localStorage.setItem("ADC","Katlyn")




//O comando (getItem) coleta dados no (localstorage) para usar de diversas formas, como quiser...

localStorage.getItem("champ","Kha'zix")
localStorage.getItem("champ","Rengar")

//Neste exemplo com o (getItem), aparecerá um alerta na tela apresentando este dado
alert(localStorage.getItem("champs"))


alert(localStorage.getItem(localStorage.key(1)))

//Mostra o tamanho do (localStorage) de acordo com o total de keys
alert(localStorage.length)




//Enviado dados para o (SessionStorage) a manipulação é a mesma, entretanto os dados são apagados ao recarregar a página
sessionStorage.setItem("champs",num)





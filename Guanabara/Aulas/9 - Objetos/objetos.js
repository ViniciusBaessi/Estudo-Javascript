let amigo = {nome:'José', 
sexo:'M', 
peso:85.4, 
engordar(p=0){
    console.log('Engordou')
    this.peso += p
}}


//Mostra o tipo de variável ou dado, no caso objeto
console.log(typeof amigo)

//Print dos dados
console.log(`${amigo.nome} pesa ${amigo.peso} kg`) 



//Faz o valor de peso receber +2
amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso} kg`) 



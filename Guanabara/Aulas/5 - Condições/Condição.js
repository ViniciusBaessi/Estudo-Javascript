//Exemplo de IF

// Pressione F8 para executar o node.js





//Condição simples (somente SE)

var vel = 78.2
    console.log(`A velocidade do seu carro é ${vel}km/h`)

if (vel > 60) {
    console.log(`Você ultrapassou a velocidade permitida. MULTADO!`)
}
    console.log(`Dirija sempre usando cinto de segurança`)





//Condição composta (SE e SENÃO)

var país = 'China'

if (país == 'Brasil') {
    console.log('Você é brasileiro')
}
else {
    console.log('Você é estrangeiro')
}







// condições aninhadas (IF > ELSE IF)

var idade = 22

if (idade < 16) {
    console.log ('Não vota')

}   else if ( idade >= 16 && idade <18) {
        console.log('Voto opcional')
} 
    else if (idade >= 18) {
        console.log('Voto obrigatório')
}




var agora = new Date()
var hora = agora.getHours()

console.log(`Agora é exatamente ${hora} horas.`)
if (hora < 12) {
    console.log('Bomd dia')
} else if (hora <= 18) {
    console.log('Boa tarde')
} else {
    console.log('Boa noite')
}




// condições múltiplas (switch)

var agora = new Date()
var diaSem = agora.getDay()

/* 

0 - DOM
1 - SEG
2 - TER
3 - QUA
4 - QUI
5 - SEX
6 - SAB

*/

switch(diaSem) {
    case 0:
        console.log('Domingo')
        break
        

        case 0:
            console.log('Domingo')
            break

        case 1:
            console.log('Segunda')
            break

        case 2:
            console.log('Terça')
            break

        case 3:
            console.log('Quarta')
            break

        case 4:
            console.log('Quinta')
            break

        case 5:
            console.log('Sexta')
            break

        case 6:
            console.log('Sábado')
            break

        default:
            console.log('[ERRO] Dia inválido')
            break
}
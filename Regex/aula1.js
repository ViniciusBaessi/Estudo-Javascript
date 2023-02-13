// Serve para localizar conteúdos em uma página web

// g = global (encontra todos os dados com aquela característica)

// i = insensitive (busca não sendo casesensitive) 

// () = Grupos

// | = OU


//Busca
var regExp1 = /Lorem Ipsum/gi;

//Busca
var regExp1 = /(Lorem) (Ipsum)/i;

//Busca
var regExp1 = /(João|Pedro) (Ipsum)/i;


var texto = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'

console.log(regExp1.exec(texto));


console.log(founf[0]); // Lorem Ipsum
console.log(founf[1]); // Lorem 
console.log(founf[2]); // Ipsum





texto.replace(/Lorem|Ipsum/gi, 'PEBA')
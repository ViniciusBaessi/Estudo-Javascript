function Tabuada() {


    var num = window.document.getElementById('num')
    var res = window.document.getElementById('textarea')
    var tab = Number(num.value)

    res.innerHTML = `${tab}`








    var node = document.createElement('li');
    node.appendChild(document.createTextNode('Scooter'));
     
    document.querySelector('ul').appendChild(node);
    
    


    for (var contador = 0; contador <= 10; contador = contador + 1) {
        if (contador == 0) {
            res.innerHTML += ``
        } else {
        res.innerHTML += `${contador}`
        }
    }

}
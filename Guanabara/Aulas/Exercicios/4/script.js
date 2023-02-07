function Tabuada() {


    var num = window.document.getElementById('num')
    var res = window.document.getElementById('textarea')
    var tab = Number(num.value)

    res.innerHTML = `${tab}`



    for (var contador = 0; contador <= 11; contador = contador + 1) {
        if (contador == 0) {
            res.innerHTML += ``
        } else {
        res.innerHTML += `${contador}`
        }
    }

}
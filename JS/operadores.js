
function soma(){

    let v1 = document.getElementById("valor1")
    let v2 = document.getElementById("valor2")

    resultado = parseInt(v1.value) + parseInt(v2.value)

    //console.log(resultado)

    document.getElementById("resultado").value = resultado
}

function subtracao(){

    let v1 = document.getElementById("valor1")
    let v2 = document.getElementById("valor2")

    resultado = parseInt(v1.value) - parseInt(v2.value)

    //console.log(resultado)

    document.getElementById("resultado").value = resultado


}

function divisao(){

    let v1 = document.getElementById("valor1")
    let v2 = document.getElementById("valor2")

    resultado = parseInt(v1.value) / parseInt(v2.value)

    //console.log(resultado)

    document.getElementById("resultado").value = resultado

}

function multiplicacao(){
    let v1 = document.getElementById("valor1")
    let v2 = document.getElementById("valor2")

    resultado = parseInt(v1.value) * parseInt(v2.value)

    //console.log(resultado)

    document.getElementById("resultado").value = resultado

}




function maior(){

    let v1 = document.getElementById("valor1")
    let v2 = document.getElementById("valor2")

    let resultado = ""

    if(v1>v2){
        resultado = "verdade"

    }
    else{
        resultado = "falso"
    }
    document.getElementById("resultado").value = resultado
}

function menor(){

    let v1 = document.getElementById("valor1")
    let v2 = document.getElementById("valor2")

    let resultado = ""

    if(v1<v2){
        resultado = "verdade"

    }
    else{
        resultado = "falso"
    }
    document.getElementById("resultado").value = resultado
}

function igual(){

    let v1 = document.getElementById("valor1")
    let v2 = document.getElementById("valor2")

    let resultado = ""

    if(v1==v2){
        resultado = "verdade"

    }
    else{
        resultado = "falso"
    }
    document.getElementById("resultado").value = resultado
}

function diferente(){

    let v1 = document.getElementById("valor1")
    let v2 = document.getElementById("valor2")

    let resultado = ""

    if(v1!=v2){
        resultado = "verdade"

    }
    else{
        resultado = "falso"
    }
    document.getElementById("resultado").value = resultado
}
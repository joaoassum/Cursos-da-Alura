//Calculando o IMC
var pacientes = document.querySelectorAll(".paciente")

for(var i = 0; i < pacientes.length; i++){

    var paciente = pacientes[i]

    var tdPeso = paciente.querySelector(".info-peso")
    var peso = tdPeso.textContent

    var tdAltura = paciente.querySelector(".info-altura")
    var altura = tdAltura.textContent

    var tdGordura = paciente.querySelector(".info-gordura")
    var gordura = tdGordura.textContent

    var tdImc = paciente.querySelector(".info-imc")

    var validacaoPeso = validaPeso(peso)
    var validacaoAltura  = validaAltura(altura)

    if(!validacaoPeso) {
        console.log("Peso inválido")
        validacaoPeso = false
        tdPeso.textContent = "Peso inválido"
        paciente.classList.add("paciente-invalido")
    }

    if(!validacaoAltura) {
        console.log("Altura inválida")
        validacaoAltura = false
        tdAltura.textContent = "Altura inválida"
        paciente.classList.add("paciente-invalido")
    }

    if(validacaoPeso && validacaoAltura){
        var imc = calculaImc(peso,altura)
        tdImc.textContent = imc
    }
}

function calculaImc(peso, altura) {
    var imc = 0
    imc = peso / (altura*altura)
    return imc.toFixed(2)
}

function validaPeso(peso) {
    if(peso>=0 && peso <=1000) {
        return true
    } else {
        return false
    }
}

function validaAltura(altura) {
    if(altura>=0 && altura <=3) {
        return true
    } else {
        return false
    }   
}
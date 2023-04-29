import '../style/style.scss'


document.getElementById("buttonCadastrar").addEventListener("click", executarCadastro)

async function executarCadastro() {
    const valueTitle = coletarInputs("idTitle")
    const valueDescription = coletarInputs("idDescription")

    if (validacao(valueTitle, valueDescription)) {
        const returnApi = await enviarLivro(valueTitle, valueDescription)
        console.log(returnApi)

        mostrarResultado(returnApi)
    }
}

function coletarInputs(id) {
    const valueId = document.getElementById(id).value
    return valueId
}

function validacao(title, description) {
    const elementoStatus = document.getElementById("retornoStatus")
    const elementoInputTitlle = document.getElementById("idTitle")
    const elementoInputDescription = document.getElementById("idDescription")

    elementoStatus.style.display = "none"

    if (title == "") {
        elementoStatus.innerHTML = "O título é obrigatório"
        elementoStatus.style.backgroundColor = "#D3455B"
        elementoStatus.style.display = "block"

        elementoInputTitlle.style.borderColor = "#D3455B"

        return false
    }

    elementoInputTitlle.style.borderColor = "#1AAE9F"


    if (description == "") {
        elementoStatus.innerHTML = "A descrição é obrigatória"
        elementoStatus.style.backgroundColor = "#D3455B"
        elementoStatus.style.display = "block"

        elementoInputDescription.style.borderColor = "#D3455B"

        return false
    }

    elementoInputDescription.style.borderColor = "#1AAE9F"

    return true
}

async function enviarLivro(title, description) {
    const url = "https://target-api-simples.cyclic.app/livros"

    const options = {
        method: "post",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
            title: title,
            description: description
        })
    }

    const response = await fetch(url, options)
    const responseData = await response.json()

    return responseData
}

function mostrarResultado(status) {
    const elementoStatus = document.getElementById("retornoStatus")
    elementoStatus.innerHTML = status
    elementoStatus.style.backgroundColor = "#1AAE9F"
    elementoStatus.style.display = "block"
}
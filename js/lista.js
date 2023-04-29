import '../style/lista.scss'


window.addEventListener("load", executar)

window.addEventListener("load", () => {
    const idBuscar = document.getElementById("buscar")
    idBuscar.addEventListener("keyup", buscarNaTabela())
})


async function executar() {
    const vetorLivros = await buscarLivros()

    await listarTabela(vetorLivros)


    document.getElementById("buscar").addEventListener("keyup", () => buscarNaTabela(vetorLivros))

}


async function buscarLivros() {
    const url = "https://target-api-simples.cyclic.app/livros"

    const response = await fetch(url)
    const livros = await response.json()
    return livros
}

function listarTabela(array) {
    //Total de livros cadastrados.
    // const elementoTotalDeLivros = document.getElementById("totalLivros")
    // elementoTotalDeLivros.innerText = array.length + " Livros cadastrados."

    //Pegando elemento corpo da tabela.
    const elementoTabela = document.getElementById("tbody")
    elementoTabela.innerText = ""

    //Looping para mostrar a tabela com os dados da API.
    for (let index = 0; index < array.length; index++) {
        const criarLinhaTabela = elementoTabela.insertRow();

        const tdId = criarLinhaTabela.insertCell();
        const tdTitle = criarLinhaTabela.insertCell();
        const tdDescription = criarLinhaTabela.insertCell();

        tdId.innerText = array[index].id;
        tdTitle.innerText = array[index].title;
        tdDescription.innerText = array[index].description;
    }
}

function buscarNaTabela(array) {
    var valueInput = document.getElementById("buscar").value
    const elementoTbody = document.getElementById("tbody")
    const linhas = document.getElementById("tbody").rows


    const valueTodos = document.getElementById("idTodos")
    const valueLivro = document.getElementById("idLivro")
    const valueTitle = document.getElementById("idTitle")
    const valueDescription = document.getElementById("idDescription")


    if (valueTodos.checked == true) {
        for (let index = 0; index < linhas.length; index++) {

            const linhaAtual = linhas[index]
            const textoLinha = linhaAtual.innerText

            if (textoLinha.includes(valueInput)) {
                linhaAtual.style.display = ""
            } else {
                linhaAtual.style.display = "none"
            }
        }
    }

    if (valueLivro.checked == true) {
        for (let index = 0; index < linhas.length; index++) {
            const linhaAtual = linhas[index]
            const linhaArray = array[index]
            const textoLinha = linhaArray.id

            if (textoLinha.toLowerCase().includes(valueInput.toLowerCase())) {
                linhaAtual.style.display = ""
            } else {
                linhaAtual.style.display = "none"
            }
        }
    }

    if (valueTitle.checked == true) {
        for (let index = 0; index < linhas.length; index++) {
            const linhaAtual = linhas[index]
            const linhaArray = array[index]
            const textoLinha = linhaArray.title

            if (textoLinha.toLowerCase().includes(valueInput.toLowerCase())) {
                linhaAtual.style.display = ""
            } else {
                linhaAtual.style.display = "none"
            }
        }
    }

    if (valueDescription.checked == true) {
        for (let index = 0; index < linhas.length; index++) {
            const linhaAtual = linhas[index]
            const linhaArray = array[index]
            const textoLinha = linhaArray.description

            if (textoLinha.toLowerCase().includes(valueInput.toLowerCase())) {
                linhaAtual.style.display = ""
            } else {
                linhaAtual.style.display = "none"
            }
        }
    }
}


import BotaoConcluir from "./concluirTarefa.js";
import BotaoDeletar from "./deletarTarefa.js";

function itemNaLista(e) {
    e.preventDefault()

    const listaDeTarefas = JSON.parse(localStorage.getItem('tarefas')) || []

    const campoDeEscrita = document.querySelector('[data-form-input]')
    const paragrafo = campoDeEscrita.value
    
    const lista = document.querySelector('[data-list]')

    //Formatando a hora e data
    const dataEHora = document.querySelector('[data-form-date]')
    const pegandoData = moment(dataEHora.value)
    const data = pegandoData.format('DD/MM/YYYY')

    const valor = {
        data,
        paragrafo
    }
    
    const tarefa = [...listaDeTarefas, valor]

    //adicionando o valor do <p> ao <li>
    const itemHTML = AdicionaNaLista(valor)
    lista.appendChild(itemHTML)

    localStorage.setItem('tarefas', JSON.stringify(tarefa))

    lista = ""
}

const AdicionaNaLista = ( { data, paragrafo } ) => {
    //criando uma <li>
    const topico = document.createElement('li')
    topico.classList.add('task')
    //adionando o valor do <input> ao <p>
    const conteudo = `<p class="content">${data} | ${paragrafo}</p>`

    topico.innerHTML = conteudo
    //adiciona botão a <li>
    topico.appendChild(BotaoConcluir())
    topico.appendChild(BotaoDeletar())

    return topico
}


export {
    itemNaLista,
    AdicionaNaLista
}

import { carregaTarefa } from "./carregaTarefa.js";
import BotaoConcluir from "./concluirTarefa.js";
import BotaoDeletar from "./deletarTarefa.js";

function itemNaLista(e) {
    e.preventDefault()

    const listaDeTarefas = JSON.parse(localStorage.getItem('tarefas')) || []

    const campoDeEscrita = document.querySelector('[data-form-input]')
    const paragrafo = campoDeEscrita.value

    //Formatando a hora e data
    const dataEHora = document.querySelector('[data-form-date]')
    const pegandoData = moment(dataEHora.value)
    const data = pegandoData.format('DD/MM/YYYY')
    const hora = pegandoData.format('LT')

    const valor = {
        data,
        hora,
        paragrafo
    }
    
    const tarefa = [...listaDeTarefas, valor]

    localStorage.setItem('tarefas', JSON.stringify(tarefa))

    campoDeEscrita.value = ""
    carregaTarefa()
}

const AdicionaNaLista = ( { data, hora, paragrafo } ) => {
    //criando uma <li>
    const topico = document.createElement('li')
    topico.classList.add('task')
    //topico.innerHTML = `${data}`
    //adionando o valor do <input> ao <p>
    const conteudo = `<p class="content">${hora} | ${paragrafo}</p>`

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

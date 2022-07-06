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
    const dataRecebida = moment(dataEHora.value)
    const hora = dataRecebida.format('HH:mm')
    const data = dataRecebida.format('DD/MM/YYYY')
    const concluida = false 

    const valor = {
        data,
        hora,
        paragrafo,
        concluida
    }
    
    const tarefa = [...listaDeTarefas, valor]

    localStorage.setItem('tarefas', JSON.stringify(tarefa))

    campoDeEscrita.value = ""
    carregaTarefa()
}

const AdicionaNaLista = ( { hora, paragrafo, concluida }, id ) => {
    //criando uma <li>
    const topico = document.createElement('li')

    //adionando o valor do <input> ao <p>
    const conteudo = `<p class="content">${hora} | ${paragrafo}</p>`
    if ( concluida ) {
        topico.classList.add('done')
    }
    topico.classList.add('task')

    topico.innerHTML = conteudo
    //adiciona botão a <li>
    topico.appendChild(BotaoConcluir(carregaTarefa, id))
    topico.appendChild(BotaoDeletar(carregaTarefa, id))

    return topico
}


export {
    itemNaLista,
    AdicionaNaLista
}

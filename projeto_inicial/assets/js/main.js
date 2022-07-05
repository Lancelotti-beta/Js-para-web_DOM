import BotaoConcluir from "./componentes/concluirTarefa.js";
import BotaoDeletar from "./componentes/deletarTarefa.js";

function itemNaLista(e) {
    e.preventDefault()
    const campoDeEscrita = document.querySelector('[data-form-input]')
    const paragrafo = campoDeEscrita.value
    const lista = document.querySelector('[data-list]')

    //Formatando a hora e data
    const dataEHora = document.querySelector('[data-form-date]')
    const pegandoData = moment(dataEHora.value)
    const data = pegandoData.format('LL')

    const valor = {
        data,
        paragrafo
    }

    //adicionando o valor do <p> ao <li>
    lista.appendChild(adicionaNaLista(valor))
    lista = " "
}

function adicionaNaLista( { data, paragrafo } ) {
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

const botaoNovoItem = document.querySelector('[data-form-button]')
botaoNovoItem.addEventListener('click', itemNaLista)

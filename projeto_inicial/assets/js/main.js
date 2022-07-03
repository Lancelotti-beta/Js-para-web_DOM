import BotaoConcluir from "./componentes/concluirTarefa.js";
import BotaoDeletar from "./componentes/deletarTarefa.js";

const campoDeEscrita = document.querySelector('[data-form-input]')
const botaoNovoItem = document.querySelector('[data-form-button]')

botaoNovoItem.addEventListener('click', e => {
    e.preventDefault()
    adicionaNaLista(campoDeEscrita.value)
})

function adicionaNaLista(tarefa) {
    const lista = document.querySelector('[data-list]')
    const item = tarefa

    //criando uma <li>
    const topico = document.createElement('li')
    topico.classList.add('task')

    //adionando o valor do <input> ao <p>
    const conteudo = `<p class="content">${item}</p>`

    topico.innerHTML = conteudo

    //adiciona botão a <li>
    topico.appendChild(BotaoConcluir())
    topico.appendChild(BotaoDeletar())

    //adicionando o valor do <p> ao <li>
    lista.appendChild(topico)

    item = ""
}


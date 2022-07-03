const campoDeEscrita = document.querySelector('[data-form-input]')
const botaoNovoItem = document.querySelector('[data-form-button]')

botaoNovoItem.addEventListener('click', e => {
    e.preventDefault()
    adicionaNaLista(campoDeEscrita.value)
})

function adicionaNaLista(tarefa) {
    const lista = document.querySelector('[data-list]')
    const item = tarefa

    const topico = document.createElement('li')
    topico.classList.add('task')
    const conteudo = `<p class="content">${item}</p>`

    topico.innerHTML = conteudo

    lista.appendChild(topico)

    item = ""
}

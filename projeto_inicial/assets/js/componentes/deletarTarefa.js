function BotaoDeletar() {
    const botaoDelete = document.createElement('button')
    botaoDelete.classList.add('delete-button')
    botaoDelete.innerText = 'Deletar'

    botaoDelete.addEventListener('click', tarefaDeletada)

    return botaoDelete
}

const tarefaDeletada = (e) => {
    const paragrafo = e.target
    const deletaParagrafo = paragrafo.parentElement

    deletaParagrafo.remove()
}

export default BotaoDeletar

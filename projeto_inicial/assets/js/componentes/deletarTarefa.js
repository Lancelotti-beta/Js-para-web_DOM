const tarefaDeletada = (atualizar, id) => {
    const index = id
    const listaDeTarefas = JSON.parse(localStorage.getItem('tarefas'))
    listaDeTarefas.splice(index)

    localStorage.setItem('tarefas', JSON.stringify(listaDeTarefas))

    atualizar()
}

function BotaoDeletar(atualizar, id) {
    const botaoDelete = document.createElement('button')
    botaoDelete.classList.add('delete-button')
    botaoDelete.innerText = 'Deletar'

    botaoDelete.addEventListener('click', () => tarefaDeletada(atualizar, id))

    return botaoDelete
}

export default BotaoDeletar

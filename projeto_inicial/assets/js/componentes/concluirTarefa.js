const tarefaConcluida = (atualizar, id) => {
    const listaDeTarefas = JSON.parse(localStorage.getItem('tarefas'))
    listaDeTarefas[id].concluida = !listaDeTarefas[id].concluida

    localStorage.setItem('tarefas', JSON.stringify(listaDeTarefas))

    atualizar()
}

function BotaoConcluir(atualizar, id) {
    const botaoCoclui = document.createElement('button')
    botaoCoclui.classList.add('check-button')
    botaoCoclui.innerText = 'Concluir'
    
    botaoCoclui.addEventListener('click', () => tarefaConcluida(atualizar, id))

    return botaoCoclui
}


export default BotaoConcluir

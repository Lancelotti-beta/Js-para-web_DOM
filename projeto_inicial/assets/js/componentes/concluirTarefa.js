function BotaoConcluir() {
    const botaoCoclui = document.createElement('button')
    botaoCoclui.classList.add('check-button')
    botaoCoclui.innerText = 'Concluir'
    
    botaoCoclui.addEventListener('click', tarefaConcluida)

    return botaoCoclui  
}

const tarefaConcluida = (e) => {
    const paragrafo = e.target
    const conclui = paragrafo.parentElement

    conclui.classList.toggle('done')
}

export default BotaoConcluir

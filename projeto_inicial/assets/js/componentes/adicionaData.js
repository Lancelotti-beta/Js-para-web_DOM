import { AdicionaNaLista } from "./adicionaNaTabela.js"

export const adicionaData = (data) => {
    const listaDeTarefas = JSON.parse(localStorage.getItem('tarefas')) || []

    const diaDaTarefa = document.createElement('li')
    const conteudo = `<p class="content-data">${data.format('DD/MM/YYYY')}</p>`

    diaDaTarefa.innerHTML = conteudo
    listaDeTarefas.forEach( item => {
        const dia = moment(item.data, 'DD/MM/YYYY')

        const diff = data.diff(dia)
        if(diff === 0){
            diaDaTarefa.appendChild(AdicionaNaLista(item))
        }
    })

    return diaDaTarefa
}


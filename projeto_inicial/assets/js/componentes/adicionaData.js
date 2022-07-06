import { AdicionaNaLista } from "./adicionaNaTabela.js"

export const adicionaData = (data) => {
    const listaDeTarefas = JSON.parse(localStorage.getItem('tarefas')) || []

    const diaDaTarefa = document.createElement('li')
    const dataDoEvento = moment(data, 'DD/MM/YYYY')
    const conteudo = `<p class="content-data">${dataDoEvento.format('DD/MM/YYYY')}</p>`

    diaDaTarefa.innerHTML = conteudo
    listaDeTarefas.forEach((item, id) => {
        const dia = moment(item.data, 'DD/MM/YYYY')

        const diff = dataDoEvento.diff(dia)
        if(diff === 0){
            diaDaTarefa.appendChild(AdicionaNaLista(item, id))
        }
    })

    return diaDaTarefa
}


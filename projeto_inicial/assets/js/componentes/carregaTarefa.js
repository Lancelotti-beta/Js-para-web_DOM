import { adicionaData } from "./adicionaData.js";

export const carregaTarefa = () => {
    const lista = document.querySelector('[data-list]')

    const arquivadosCarregado = JSON.parse(localStorage.getItem('tarefas')) || []

    lista.innerHTML = ""
    arquivadosCarregado.forEach(tarefas => {
        const dia = moment(tarefas.data, 'DD/MM/YYYY')
        lista.appendChild(adicionaData(dia))
    });
}
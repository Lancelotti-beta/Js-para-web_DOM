import { AdicionaNaLista } from "./adicionaNaTabela.js";

export const carregaTarefa = () => {
    const lista = document.querySelector('[data-list]')

    const arquivadosCarregado = JSON.parse(localStorage.getItem('tarefas')) || []

    lista.innerHTML = ""
    arquivadosCarregado.forEach(tarefas => {
        lista.appendChild(AdicionaNaLista(tarefas))
    });
}
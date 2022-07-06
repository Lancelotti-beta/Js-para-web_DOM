import { ordenaData, removeDataRepetidas } from "../service/data.js";
import { adicionaData } from "./adicionaData.js";

export const carregaTarefa = () => {
    const lista = document.querySelector('[data-list]')

    const arquivadosCarregado = JSON.parse(localStorage.getItem('tarefas')) || []

    lista.innerHTML = ""
    const datasUnicas = removeDataRepetidas(arquivadosCarregado)
    ordenaData(datasUnicas)
    datasUnicas.forEach(dia => {
        lista.appendChild(adicionaData(dia))
    });

}

import { itemNaLista } from "./componentes/adicionaNaTabela.js";
import { carregaTarefa } from "./componentes/carregaTarefa.js";

const botaoNovoItem = document.querySelector('[data-form-button]')
botaoNovoItem.addEventListener('click', itemNaLista)

carregaTarefa()

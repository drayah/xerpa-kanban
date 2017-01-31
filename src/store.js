/*
 * Vuex store for kanban lists
 */

import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const KANBAN_TODO   = "_KANBAN_TODO"
const KANBAN_DOING  = "_KANBAN_DOING"
const KANBAN_DONE   = "_KANBAN_DONE" 

const add = (list, text, index) => {
    list.cards.splice(index, 0, text)
}

const remove = (list, index) => {
    list.cards.splice(index, 1)
}

const listForId = (state, listId) => {
    return state.board.find(l => l.id === listId)
}

const listForCard = (state, card) => {
    return listForId(state, card.listId)
}

const store = new Vuex.Store({
    state: {
        board: [
            {
                id: KANBAN_TODO,
                header: "Para executar",
                cards: [
                    "Trabalhar na Xerpa", 
                ]
            },
            {
                id: KANBAN_DOING,
                header: "Em andamento",
                cards: [
                    "Terminar Living Clojure",
                    "Terminar Clojure for the Brave and True"
                ]
            },
            {
                id: KANBAN_DONE,
                header: "Finalizado",
                cards: [
                    "Teste de Xerpa"
                ]
            }
        ]
    },
    mutations: {
        add(state, payload) {
            let list = listForId(state, payload.id)
            add(list, payload.text, list.cards.length)
        },
        delete(state, payload) {
            let card = payload.card
            remove(listForCard(state, card), card.index)
        },
        move(state, payload) {
            let source = payload.from
            let destination = payload.to

            if (source.listId !== destination.listId) {
                //moving between differing lists
                remove(listForCard(state, source), source.index)
                add(listForCard(state, destination), source.text, destination.index)
            }
            else {
                //moving within a single list
                if (source.index !== destination.index) {
                    let destinationIndex = destination.index - 1 < 0 ? 0 : destination.index - 1

                    if (source.index > destination.index && destination.index > 0) {
                        destinationIndex += 1
                    }

                    remove(listForCard(state, source), source.index)
                    add(listForCard(state, destination), source.text, destinationIndex)
                }
            }
        }
    },
    plugins: [
        createPersistedState({
            key: "kanban-store"
        })
    ]
})

export default store

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

const hasCardForIndex = (list, index) => {
    return list.cards[index] !== undefined
}

const listForId = (state, listId) => {
    return state.board.find(l => l.id === listId)
}

const listForCard = (state, card) => {
    return listForId(state, card.listId)
}

const state = {
    board: [
        {
            id: KANBAN_TODO,
            header: "Para executar",
            cards: []
        },
        {
            id: KANBAN_DOING,
            header: "Em andamento",
            cards: []
        },
        {
            id: KANBAN_DONE,
            header: "Finalizado",
            cards: []
        }
    ]
}

export const mutations = {
    add: (state, payload) => {
        if (payload) {
            let list = listForId(state, payload.id)

            if (list) {
                add(list, payload.text, list.cards.length)
            }
        }
    },
    delete: (state, payload) => {
        if (payload) {
            let card = payload.card
            let list = listForCard(state, card)
    
            if (list) {
                remove(list, card.index)
            }
        }
    },
    move: (state, payload) => {
        if (payload) {
            let source = payload.from
            let destination = payload.to
    
            if (source.listId !== destination.listId) {
                //moving between differing lists
                let sourceList = listForCard(state, source)

                if (hasCardForIndex(sourceList, source.index)) {
                    remove(sourceList, source.index)
                    add(listForCard(state, destination), source.text, destination.index)
                }
            }
            else {
                //moving within a single list
                if (source.index !== destination.index) {
                    let sourceList = listForCard(state, source)
                    let destinationIndex = destination.index - 1 < 0 ? 0 : destination.index - 1
    
                    if (source.index > destination.index && destination.index > 0) {
                        destinationIndex += 1
                    }
    
                    if (hasCardForIndex(sourceList, source.index)) {
                        remove(sourceList, source.index)
                        add(listForCard(state, destination), source.text, destinationIndex)
                    }
                }
            }
        }
    }
}

const store = new Vuex.Store({
    state,
    mutations,
    plugins: [
        createPersistedState({
            key: "xerpa-kanban-store"
        })
    ]
})

export default store

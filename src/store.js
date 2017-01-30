/*
 * Vuex store for kanban lists
 */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const KANBAN_TODO   = "_KANBAN_TODO"
const KANBAN_DOING  = "_KANBAN_DOING"
const KANBAN_DONE   = "_KANBAN_DONE" 

const store = new Vuex.Store({
    state: {
        board: [
            {
                id: KANBAN_TODO,
                header: "Para executar",
                cards: [
                    "do thing 1", 
                    "do thing 2",
                    "thing a",
                    "thing b",
                    "thing c",
                    "thing d",
                    "thing e",
                    "thing things 1",
                    "thing things 2",
                    "thing things 3",
                    "thing test thing a",
                    "thing test thing b",
                    "thing test thing c",
                    "thing test thing d",
                    "thing test thing e",
                    "thing test thing f",
                    "thing test thing g",
                    "thing test thing h",
                    "thing test thing i",
                    "thing test thing j",
                    "thing things a",
                    "thing things b",
                    "thing things c",
                    "thing things d",
                    "thing things e",
                    "a longer thing to see how this thing draws in the thing"
                ]
            },
            {
                id: KANBAN_DOING,
                header: "Em andamento",
                cards: ["a longer description to test line breakage in this card"]
            },
            {
                id: KANBAN_DONE,
                header: "Finalizado",
                cards: ["e", "f"]
            }
        ]
    },
    mutations: {
        move(state, payload) {
            let source = payload.from
            let destination = payload.to

            let listForCard = (card) => {
                return state.board.find(l => l.id === card.listId)
            }

            let remove = (list, index) => {
                list.cards.splice(index, 1)
            }

            let add = (list, text, index) => {
                list.cards.splice(index, 0, text)
            }

            if (source.listId !== destination.listId) {
                //moving between differing lists
                remove(listForCard(source), source.index)
                add(listForCard(destination), source.text, destination.index)
            }
            else {
                //moving within single list
                let destinationIndex = destination.index - 1 < 0 ? 0 : destination.index
                remove(listForCard(source), source.index)
                add(listForCard(destination), source.text, destinationIndex)
            }
        }
    }
})

export default store

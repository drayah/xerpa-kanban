/*
 * Vuex store for kanban lists
 */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        board: {
            todo: {
                id: 1,
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
            doing: {
                id: 2,
                header: "Em andamento",
                cards: ["a longer description to test line breakage in this card"]
            },
            done: {
                id: 3,
                header: "Finalizado",
                cards: ["e", "f"]
            }
        }
    },
    mutations: {}
})

export default store

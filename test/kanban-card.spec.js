import Vue from 'vue'
import Vuex from 'vuex'
import Card from '../src/components/kanban-card.vue'
import getViewModel from './helper'

Vue.use(Vuex)
const store = new Vuex.Store()
Vue.prototype.$store = store

const card = {
    type: "card",
    listId: "id1",
    text: "text",
    index: 0,
    deleting: false
}

describe("KanbanCard", () => {
    it("should set the correct default data", () => {
        const vm1 = getViewModel(Card, {
            card: card,
            deleting: false
        })

        const vm2 = getViewModel(Card, {
            card: card,
            deleting: true
        })

        expect(vm1.isDeleting).to.be.false
        expect(vm2.isDeleting).to.be.true
    })

    it("should correctly check cards", () => {
        let cardChecker = Card.methods.isCard

        expect(cardChecker(null)).to.be.false
        expect(cardChecker(undefined)).to.be.false
        expect(cardChecker("")).to.be.false
        expect(cardChecker("test")).to.be.false
        expect(cardChecker(1)).to.be.false
        expect(cardChecker({})).to.be.false
        expect(cardChecker({type: "card"})).to.be.true
        expect(cardChecker({type: "droppable"})).to.be.false
    })

    it("should correctly enable deleting state", () => {
        const vm = getViewModel(Card, {
            card: card,
            deleting: false
        })

        expect(vm.isDeleting).to.be.false
        vm.setDeleting()
        expect(vm.isDeleting).to.be.true
    })

    it("should correctly disable deleting state", () => {
        const vm = getViewModel(Card, {
            card: card,
            deleting: true
        })

        expect(vm.isDeleting).to.be.true
        vm.stopDeleting()
        expect(vm.isDeleting).to.be.false
    })

    it("should delete a card from the store", () => {
        let spy = sinon.spy()
        store.commit = spy

        const vm = getViewModel(Card, {
            card: card,
            deleting: true
        })

        expect(vm.isDeleting).to.be.true
        vm.confirmDelete(card)
        expect(vm.isDeleting).to.be.false
        expect(spy).to.have.been.calledWith("delete", {
            card: card
        })
    })

    it("should move a card by dragging and dropping", () => {
        let spy = sinon.spy()
        store.commit = spy

        const vm = getViewModel(Card, {
            card: card,
            deleting: false
        })

        //mock card we drop on
        let droppableCard = { type: "fake" }

        vm.drag(card, {
            //mock event
            target: {
                innerText: "fake text"
            },
            dataTransfer: {
                effectAllowed: "",
                setData() {}
            }
        })

        vm.drop(droppableCard, {
            //mock event
            target: {
                classList: {
                    remove() {}
                }
            }
        })

        expect(spy).to.have.been.calledWith("move", {
            from: card,
            to: droppableCard
        })
    })
})
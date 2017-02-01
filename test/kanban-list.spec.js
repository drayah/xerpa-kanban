import Vue from 'vue'
import Vuex from 'vuex'
import List from '../src/components/kanban-list.vue'
import getViewModel from './helper'

Vue.use(Vuex)
const store = new Vuex.Store()
Vue.prototype.$store = store

describe("KanbanList", () => {
    it("should have a KanbanCard child component", () => {
        expect(List.components.KanbanCard).to.be.an('object')
    })

    it("should set the correct default data", () => {
        expect(List.data().editableText).to.equal("")
        expect(List.data().showEditableCard).to.be.false
    })

    it("should correctly set a computed header when created", () => {
        const vm = getViewModel(List, {
            list: {
                header: "Sample header",
                cards: []
            }
        })

        expect(vm.header).to.equal("Sample header")
    })    

    it("should correctly set the computed cardList when cards are empty", () => {
        const vm = getViewModel(List, {
            list: {
                id: "some id",
                header: "header",
                cards: []
            }
        })

        let cards = vm.cardList
        
        expect(cards.length).to.equal(1)
        expect(cards[0]).to.be.eql({
            type: "droppable",
            listId: "some id",
            text: "",
            index: 0,
            deleting: false
        })
    })

    it("should correctly set the computed cardList when created", () => {
        const vm = getViewModel(List, {
            list: {
                id: "some id",
                header: "Sample header",
                cards: [
                    "a",
                    "b",
                    "c",
                    "d"
                ]
            }
        })

        let cards = vm.cardList

        expect(cards.length).to.equal(9)
        
        expect(cards[0]).to.be.eql({
            type: "droppable",
            listId: "some id",
            text: "",
            index: 0,
            deleting: false
        })

        expect(cards[1]).to.be.eql({
            type: "card",
            listId: "some id",
            text: "a",
            index: 0,
            deleting: false
        })

        expect(cards[2]).to.be.eql({
            type: "droppable",
            listId: "some id",
            text: "",
            index: 1,
            deleting: false
        })

        expect(cards[3]).to.be.eql({
            type: "card",
            listId: "some id",
            text: "b",
            index: 1,
            deleting: false
        })

        expect(cards[4]).to.be.eql({
            type: "droppable",
            listId: "some id",
            text: "",
            index: 2,
            deleting: false
        })

        expect(cards[5]).to.be.eql({
            type: "card",
            listId: "some id",
            text: "c",
            index: 2,
            deleting: false
        })

        expect(cards[6]).to.be.eql({
            type: "droppable",
            listId: "some id",
            text: "",
            index: 3,
            deleting: false
        })

        expect(cards[7]).to.be.eql({
            type: "card",
            listId: "some id",
            text: "d",
            index: 3,
            deleting: false
        })

        expect(cards[8]).to.be.eql({
            type: "droppable",
            listId: "some id",
            text: "",
            index: 4,
            deleting: false
        })
    }) 

    it("should toggle the editable card", () => {
        const vm = getViewModel(List, {
            list: {
                id: "id",
                header: "header",
                cards: []
            }
        })

        expect(vm.showEditableCard).to.be.false

        vm.toggleEditableCard()
        
        expect(vm.showEditableCard).to.be.true
    })

    it("should set the editable text", () => {
        const vm = getViewModel(List, {
            list: {
                id: "id",
                header: "header",
                cards: []
            }
        })

        expect(vm.editableText).to.equal("")

        vm.changeEditable({
            //mock event
            target: {
                innerText: "mocked element text"
            }
        })

        expect(vm.editableText).to.equal("mocked element text")
    })

    it("should add a new card to the store", () => {
        let spy = sinon.spy()
        store.commit = spy

        const vm = getViewModel(List, {
            list: {
                id: "fake id",
                header: "fake header",
                cards: []
            }
        })

        vm.editableText = "fake card text"
        vm.addCard()

        expect(vm.editableText).to.equal("")
        expect(spy).to.have.been.calledWith("add", {
            id: "fake id",
            text: "fake card text"
        })
    })
})
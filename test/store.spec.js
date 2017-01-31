import { mutations } from '../src/store'

function mockState() {
    return {
        board: [
            {
                id: "list1",
                header: "List 1",
                cards: ["card a", "card b"]
            },
            {
                id: "list2",
                header: "List 2",
                cards: []
            }
        ]
    }
}

describe("store mutations", () => {
    it("should add cards to the store", () => {
        const state = mockState()

        mutations.add(state, {id: "list1", text: "my text"})
        expect(state.board[0].cards.length).to.equal(3)    
        expect(state.board[0].cards[0]).to.equal("card a")    
        expect(state.board[0].cards[1]).to.equal("card b")    
        expect(state.board[0].cards[2]).to.equal("my text")

        mutations.add(state, {id: "list2", text: "abc"})
        mutations.add(state, {id: "list2", text: ""})
        expect(state.board[1].cards.length).to.equal(2)
        expect(state.board[1].cards[0]).to.equal("abc")
        expect(state.board[1].cards[1]).to.equal("")

        //invalid adds
        mutations.add(state, {id: "invalid", text: "abc"})
        mutations.add(state, null)
        mutations.add(state, undefined)
        expect(state.board.length).to.equal(2)
        expect(state.board[0].cards.length).to.equal(3)
        expect(state.board[1].cards.length).to.equal(2)
    })

    it("should delete cards from the store", () => {
        const state = mockState()

        //invalid deletes
        mutations.delete(state, {card: {listId: "invalid", index: 0}})
        mutations.delete(state, {card: {listId: "list1", index: 10}})
        mutations.delete(state, null)
        mutations.delete(state, undefined)
        expect(state.board[0].cards.length).to.equal(2)

        mutations.delete(state, {card: {listId: "list1", index: 0}})
        expect(state.board[0].cards.length).to.equal(1)

        mutations.delete(state, {card: {listId: "list2", index: 0}})
        expect(state.board[1].cards.length).to.equal(0)
    })

    it("should move cards between lists", () => {
        const state = mockState()

        //invalid moves
        mutations.move(state, null)
        mutations.move(state, undefined)
        mutations.move(state, {
            from: {listId: "list1", index: 10, text: "test move"},
            to: {listId: "list2", index: 0}
        })

        //nothing should be changed
        expect(state.board[0].cards.length).to.equal(2)
        expect(state.board[1].cards.length).to.equal(0)

        //valid move from list1 to list2
        mutations.move(state, {
            from: {listId: "list1", index: 1, text: "card b"},
            to: {listId: "list2", index: 0}
        })

        expect(state.board[0].cards.length).to.equal(1)
        expect(state.board[0].cards[0]).to.equal("card a")
        expect(state.board[1].cards.length).to.equal(1)
        expect(state.board[1].cards[0]).to.equal("card b")

        //valid move from list1 to list2 with index larger than length
        mutations.move(state, {
            from: {listId: "list1", index: 0, text: "card a"},
            to: {listId: "list2", index: 100}
        })

        expect(state.board[0].cards.length).to.equal(0)
        expect(state.board[1].cards.length).to.equal(2)
        expect(state.board[1].cards[0]).to.equal("card b")
        expect(state.board[1].cards[1]).to.equal("card a")
    })

    it("should move cards within a list", () => {
        const state = mockState()

        //invalid moves
        mutations.move(state, null)
        mutations.move(state, undefined)
        mutations.move(state, {
            from: {listId: "list1", index: 100, text: "test"},
            to: {listId: "list1", index: 0}
        })

        //nothing changed
        expect(state.board[0].cards.length).to.equal(2)
        expect(state.board[0].cards[0]).to.equal("card a")
        expect(state.board[0].cards[1]).to.equal("card b")

        mutations.move(state, {
            from: {listId: "list1", index: 1, text: "card b"},
            to: {listId: "list1", index: 0}
        })

        expect(state.board[0].cards.length).to.equal(2)
        expect(state.board[0].cards[0]).to.equal("card b")
        expect(state.board[0].cards[1]).to.equal("card a")

        //this shouldnt move anything
        mutations.move(state, {
            from: {listId: "list1", index: 0, text: "card b"},
            to: {listId: "list1", index: 1}
        })

        expect(state.board[0].cards.length).to.equal(2)
        expect(state.board[0].cards[0]).to.equal("card b")
        expect(state.board[0].cards[1]).to.equal("card a")

        mutations.move(state, {
            from: {listId: "list1", index: 0, text: "card b"},
            to: {listId: "list1", index: 2}
        })

        expect(state.board[0].cards.length).to.equal(2)
        expect(state.board[0].cards[0]).to.equal("card a")
        expect(state.board[0].cards[1]).to.equal("card b")
    })
})
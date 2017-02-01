import Board from '../src/components/kanban-board.vue'

describe("KanbanBoard", () => {
    it("should have child components", () => {
        expect(Board.components.KanbanList).to.be.an('object')
    })

    it("should have computed properties", () => {
        expect(Board.computed).to.be.an('object')
        expect(Board.computed.todo).to.be.a('function')
        expect(Board.computed.doing).to.be.a('function')
        expect(Board.computed.done).to.be.a('function')
    })
})
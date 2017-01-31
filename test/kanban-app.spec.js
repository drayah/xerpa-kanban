import App from '../src/components/kanban-app.vue'

describe("KanbanApp", () => {
    it("should have child components", () => {
        expect(App.components.KanbanHeader).to.be.an('object')
        expect(App.components.KanbanBoard).to.be.an('object')
        expect(App.components.KanbanFooter).to.be.an('object')
    })
})
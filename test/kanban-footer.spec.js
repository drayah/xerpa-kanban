import Footer from '../src/components/kanban-footer.vue'
import getViewModel from './helper'

describe("KanbanFooter", () => {
    it("should contain footer text", () => {
        const vm = getViewModel(Footer, {})
        expect(vm.$el.textContent).to.contain("Xerpa")
        expect(vm.$el.textContent).to.contain("direitos reservados")
    })
})
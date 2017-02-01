import Header from '../src/components/kanban-header.vue'
import getViewModel from './helper'

describe("KanbanHeader", () => {
    it("should contain a logo", () => {
        const vm = getViewModel(Header, {})
        expect(vm.$el.innerHTML).to.contain("logo")
    })
})
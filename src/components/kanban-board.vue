<!-- 
    kanban-board

    The actual Kanban board parent container
-->
<template>
    <main id="kanban-board">
        <kanban-list header="Para executar" :cards="todo"></kanban-list>
        <kanban-list header="Em andamento" :cards="doing"></kanban-list>
        <kanban-list header="Finalizado" :cards="done"></kanban-list>
    </main>
</template>

<script>
import KanbanList from './kanban-list.vue'

export default {
    data() {
        return {
            todo: [
                "do thing 1", 
                "do thing 2",
                "thing a",
                "thing b",
                "thing c",
                "thing d",
                "thing e",
                "thing things",
                "thing things",
                "thing things",
                "thing test thing",
                "thing test thing",
                "thing test thing",
                "thing test thing",
                "thing test thing",
                "thing test thing",
                "thing test thing",
                "thing test thing",
                "thing test thing",
                "thing test thing",
                "thing things",
                "thing things",
                "thing things",
                "thing things",
                "thing things",
                "a longer thing to see how this thing draws in the thing"
            ],
            doing: [
                "a thing"
            ],
            done: [
                "first thing"
            ]
        }
    },
    components: {
        KanbanList
    }
}
</script>

<style lang="scss" src="./kanban-board.scss"></style>
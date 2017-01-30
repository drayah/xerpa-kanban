<!-- 
    kanban-board

    The actual Kanban board parent container
-->
<template>
    <main id="kanban-board">
        <kanban-list :list="todo"></kanban-list>
        <kanban-list :list="doing"></kanban-list>
        <kanban-list :list="done"></kanban-list>
    </main>
</template>

<script>
import KanbanList from './kanban-list.vue'

export default {
    computed: {
        todo() {
            return this.$store.state.board[0]
        },
        doing() {
            return this.$store.state.board[1]
        },
        done() {
            return this.$store.state.board[2]
        }
    },
    components: {
        KanbanList
    }
}
</script>

<style lang="scss" src="./kanban-board.scss"></style>
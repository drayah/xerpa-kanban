<!-- 
    kanban-app

    A custom vue component that acts as a container for
    the entire kanban application
-->
<template>
    <div id="kanban-container">
        <kanban-header></kanban-header>
        <kanban-board></kanban-board>
        <kanban-footer></kanban-footer>
    </div>
</template>

<script>
import KanbanHeader from './kanban-header.vue'
import KanbanBoard from './kanban-board.vue'
import KanbanFooter from './kanban-footer.vue'

export default {
    components: {
        KanbanHeader,
        KanbanBoard,
        KanbanFooter
    }
}
</script>

<style lang="scss" src="./kanban-app.scss"></style>
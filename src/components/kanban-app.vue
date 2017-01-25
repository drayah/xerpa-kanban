<!-- 
    kanban-app

    A custom vue component that acts as a container for
    the entire kanban application
-->
<template>
    <div id="kanban-container">
        <kanban-header></kanban-header>
    </div>
</template>

<script>
import KanbanHeader from './kanban-header.vue'

export default {
    components: {
        KanbanHeader
    }
}
</script>

<style lang="scss" src="./kanban-app.scss"></style>
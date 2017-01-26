<!-- 
    kanban-board

    The actual Kanban board parent container
-->
<template>
    <main id="kanban-board">
        <kanban-list header="Para executar"></kanban-list>
        <kanban-list header="Em andamento"></kanban-list>
        <kanban-list header="Finalizado"></kanban-list>
        <!--        
        <div class="list-wrapper">
            <div class="list-container">
                <header class="list-header">Column 2</header>
                <section>
                    <p>abc</p>
                    <p>abc</p>
                    <p>abc</p>
                </section>
                <footer class="list-footer">foot</footer>
            </div>
        </div>
        -->
    </main>
</template>

<script>
import KanbanList from './kanban-list.vue'

export default {
    components: {
        KanbanList
    }
}
</script>

<style lang="scss" src="./kanban-board.scss"></style>
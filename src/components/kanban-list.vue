<!-- 
    kanban-list

    A list component for the Kanban board
-->
<template>
    <div class="list-wrapper">
        <div class="list-container">
            <header class="list-header">{{header}}</header>
            <section>
                <ul class="cards">
                    <li class="card" v-for="card in cards">{{card}}</li>
                </ul>
                <!--
                <kanban-card text="some example text"></kanban-card>
                <kanban-card text="some example text"></kanban-card>
                -->
            </section>
            <footer class="list-footer">
                <button>Adicionar...</button>
            </footer>
        </div>
    </div>
</template>

<script>
export default {
    props: ['header', 'cards']
}
</script>

<style lang="scss" src="./kanban-list.scss"></style>
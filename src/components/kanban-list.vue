<!-- 
    kanban-list

    A list component for the Kanban board
-->
<template>
    <div class="list-wrapper">
        <div class="list-container">
            <header class="list-header">
                {{header}}
            </header>
            <section>
                <ul class="cards">
                    <kanban-card :card="card" v-for="(card, index) in cardList"></kanban-card>
                </ul>
            </section>
            <footer class="list-footer">
                <button>Adicionar...</button>
            </footer>
        </div>
    </div>
</template>

<script>
import KanbanCard from './kanban-card.vue'

export default {
    props: ['list'],
    computed: {
        header() {
            return this.list.header
        },
        cardList() {
            let dropTarget = {
                type: "droppable",
                text: ""
            }

            let cards = this.list.cards.reduce((accumulator, current) => {
                accumulator.push(dropTarget, {type: "card", text: current})
                return accumulator
            }, [])

            cards.push(dropTarget)
            return cards
        }
    },
    components: {
        KanbanCard
    }
}
</script>

<style lang="scss" src="./kanban-list.scss"></style>
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
                    <kanban-card :card="card" v-for="(card, index) in cardList"></kanban-card>
                </ul>
                <!--                
                <ul class="cards">
                    <li @dragenter="toggleBorder" 
                        @dragleave="toggleBorder" 
                        :data-index="index" 
                        draggable="true" 
                        class="card" 
                        v-for="(card, index) in enhancedCards">
                        {{card.text}}
                    </li>
                </ul>
                -->
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
    props: ['header', 'cards'],
    computed: {
        cardList() {
            let dropTarget = {
                type: "droppable",
                text: ""
            }

            let cards = this.cards.reduce((accumulator, current) => {
                accumulator.push(dropTarget, {type: "card", text: current})
                return accumulator
            }, [])

            cards.push(dropTarget)
            return cards
        }
    },
    created() {
        console.log(this.enhancedCards)
    },
    components: {
        KanbanCard
    }
}
</script>

<style lang="scss" src="./kanban-list.scss"></style>
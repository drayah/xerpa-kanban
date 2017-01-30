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
                    <kanban-card :card="card" :deleting="card.deleting" v-for="card in cardList"></kanban-card>
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

const createListItem = (type, listId, cardText, cardIndex) => {
    return {
        type: type,
        listId: listId,
        text: cardText,
        index: cardIndex,
        deleting: false
    }
}

export default {
    props: ['list'],
    computed: {
        header() {
            return this.list.header
        },
        cardList() {
            let cards = this.list.cards.reduce((accumulator, current, index) => {
                accumulator.push(
                    createListItem("droppable", this.list.id, "", index), 
                    createListItem("card", this.list.id, current, index)
                )
                return accumulator
            }, [])
            
            cards.push(createListItem("droppable", this.list.id, "", this.list.cards.length))
            return cards
        }
    },
    components: {
        KanbanCard
    }
}
</script>

<style lang="scss" src="./kanban-list.scss"></style>
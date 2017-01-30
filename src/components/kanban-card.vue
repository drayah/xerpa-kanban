<!-- 
    kanban-card

    A draggable card component used in kanban lists
-->
<template>
    <li v-if="isCard(card)" 
        draggable="true" 
        @dragstart="drag(card, $event)"
        class="card">
        {{card.text}}
    </li>
    <li v-else
        @dragenter="toggleBorder"
        @dragleave="toggleBorder"
        @dragover.prevent
        @drop.prevent="drop(card, $event)"
        class="droppable"></li>
</template>

<script>
let draggingCard = undefined

export default {
    props: ['card'],
    methods: {
        isCard(card) {
            return card.type === "card"
        },
        toggleBorder(event) {
            let element = event.target
            element.classList.toggle('target')
        },
        drag(card, event) {
            let element = event.target
            draggingCard = card
            event.dataTransfer.effectAllowed = 'move'
            event.dataTransfer.setData('text/plain', element.innerText)
        },
        drop(card, event) {
            let element = event.target
            element.classList.remove('target')

            //update store
            this.$store.commit('move', {
                from: draggingCard,
                to: card
            })
        }
    }
}
</script>

<style lang="scss" src="./kanban-card.scss"></style>

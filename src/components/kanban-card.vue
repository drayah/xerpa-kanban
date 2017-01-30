<!-- 
    kanban-card

    A draggable card component used in kanban lists
-->
<template>
    <li v-if="isCard(card)" 
        draggable="true" 
        @dragstart="drag(card, $event)"
        @click="setDeleting"
        class="card">
        {{card.text}}
        <div @click.stop="stopDeleting" v-show="isDeleting" class="delete-container">
            <div @click.stop="stopDeleting" class="action">Cancelar</div>
            <div @click.stop="confirmDelete(card)" class="action delete">Excluir Item</div>
        </div>
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
    data() {
        return {
            isDeleting: this.deleting
        }
    },
    props: ['card', 'deleting'],
    methods: {
        isCard(card) {
            return card.type === "card"
        },
        setDeleting() {
            this.isDeleting = true
        },
        stopDeleting() {
            this.isDeleting = false
        },
        confirmDelete(card) {
            this.stopDeleting()

            //update store
            this.$store.commit('delete', {
                card: card
            })
        },
        toggleBorder(event) {
            let element = event.target
            element.classList.toggle('target')
        },
        drag(card, event) {
            let element = event.target
            draggingCard = card
            this.stopDeleting()
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

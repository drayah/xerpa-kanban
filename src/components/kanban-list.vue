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
            <section ref="listSection">
                <ul class="cards">
                    <kanban-card :card="card" :deleting="card.deleting" v-for="card in cardList"></kanban-card>
                    <div ref="editableCard" @keyup="changeEditable" v-show="showEditableCard" @keydown.enter.prevent="addCard" class="add-card" contenteditable="true"></div>
                </ul>
            </section>
            <footer class="list-footer">
                <button @click="toggleEditableCard">Adicionar...</button>
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
    data() {
        return {
            editableText: "",
            showEditableCard: false
        }
    },
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
    methods: {
        toggleEditableCard() {
            this.showEditableCard = !this.showEditableCard

            //scroll list container down
            //and focus editableCard
            //after DOM update, because we
            //need to wait until the editableCard
            //gets shown
            this.$nextTick(() => {
                let editable = this.$refs.editableCard
                let section = this.$refs.listSection
                section.scrollTop = section.scrollHeight
                editable.innerText = ""
                editable.focus()
            })
        },
        changeEditable(event) {
            let element = event.target
            this.editableText = event.target.innerText
        },
        addCard() {
            let text = this.editableText.trim()

            if (text.length > 0) {
                this.toggleEditableCard()
                this.editableText = ""

                //update store
                this.$store.commit('add', {
                    id: this.list.id,
                    text: text
                })
            }
        }
    },
    components: {
        KanbanCard
    }
}
</script>

<style lang="scss" src="./kanban-list.scss"></style>
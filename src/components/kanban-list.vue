<!-- 
    kanban-list

    A list component for the Kanban board
-->
<template>
    <div class="list-wrapper">
        <div class="list-container">
            <header class="list-header">{{header}}</header>
            <section>
                    test
                    <p>section bla bla</p>
                    <p>section bla bla</p>
                    <p>section bla bla</p>
                    <p>section bla bla</p>
                    <p>section bla bla</p>
                    <p>section bla bla</p>
                    <p>section bla bla</p>
                    <p>section bla bla</p>
                    <p>section bla bla</p>
                    <p>section bla bla</p>
                    <p>section bla bla</p>
                    <p>section bla bla</p>
                    <p>section bla bla</p>
                    <p>section bla bla</p>
                    <p>section bla bla</p>
                    <p>section bla bla</p>
                    <p>section bla bla</p>
                    <p>section bla bla</p>
                    <p>section bla bla</p>
            </section>
            <footer class="list-footer">footer here</footer>
        </div>
    </div>
</template>

<script>
export default {
    props: ['header']
}
</script>

<style lang="scss" src="./kanban-list.scss"></style>
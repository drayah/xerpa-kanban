<!-- 
    kanban-app

    A custom vue component that acts as a container for
    the entire kanban application
-->
<template>
    <div id="kanban-container">
        this is my kanban app {{msg}}
    </div>
</template>

<script>
export default {
    data() {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    }
}
</script>

<style lang="scss" src="./kanban-app.scss"></style>
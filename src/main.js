import Vue from 'vue'
import Kanban from './components/kanban-app.vue'
import store from './store.js'

new Vue({
  el: '#app',
  store,
  render: h => h(Kanban)
})

<template>
  <div class="counter">
    <Input v-on:buttonClicked="addItem"/>
    <List v-bind:items="items"/>
  </div>
</template>

<script>
import Input from './Counter/Input.vue'
import List from './Counter/List.vue'

export default {
  name: 'Counter',
  components: {
    Input ,
    List
  },
  props: {
    items : Array
  },
  methods: {
    addItem(value){
      this.items.push({name:value,number:0})
    }
  }
}
</script>

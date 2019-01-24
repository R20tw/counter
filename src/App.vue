<template>
  <div id="app">
    <NavBar></NavBar>
    <Counter v-bind:items="items">
      
    </Counter>
  </div>
</template>

<script>
import Counter from './components/Counter.vue'
import NavBar from './components/NavBar.vue'

export default {
  name: 'app',
  components: {
    Counter,
    NavBar
  },
  props: {
    items : Array
  },
  method: {

  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+TC');
#app {
  font-family: 'Noto Sans TC', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>

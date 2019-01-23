<template>
  <div class="ts segmented list">
    <Item :v-for="item in items" v-bind:item="item"></Item>
  </div>
</template>

<script>
import Item from "./Item.vue";

export default {
  name: "List",
  components: {
    Item
  },
  props: {
    items : Array
  }
};
</script>

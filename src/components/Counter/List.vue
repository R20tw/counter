<template>
  <div class="ts inverted segment">
    <div class="ts inverted relaxed divided list">
      <CounterItem
        v-for="item in items"
        v-bind:item="item"
        :key="item.id"
        v-on:deleteItem="deleteItem"
        v-on:plusItem="plusItem"
        v-on:lessItem="lessItem"
      ></CounterItem>
    </div>
  </div>
</template>

<script>
import CounterItem from "./CounterItem.vue";

export default {
  name: "List",
  components: {
    CounterItem
  },
  props: {
    items: Array
  },
  methods: {
    deleteItem(id) {
      this.$emit("deleteItem", id);
    },
    plusItem(id) {
      this.$emit("plusItem", id);
    },
    lessItem(id) {
      this.$emit("lessItem", id);
    }
  }
};
</script>

<template>
  <div>
    <TocasButton :title="刪除" v-on:click="deleteItem"></TocasButton>
    {{ item.number }} * {{ item.name }}
  </div>
</template>

<script>
import TocasButton from "./TocasButton.vue";

export default {
  name: "Item",
  components: {
      TocasButton
  },
  props: {
    item: Object
  }
};
</script>
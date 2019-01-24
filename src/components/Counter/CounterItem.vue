<template>
  <div class="ts stackable grid">
    <div class="three wide column">
      <TocasButton
        class="negative fluid very compact"
        :ButtonTitle="deleteTitle"
        v-on:buttonClicked="deleteItem"
      ></TocasButton>
    </div>
    <div class="five wide column">
      <div class="ts inverted segment">
        <div class="ts inverted header">{{ item.name }}</div>
      </div>
    </div>
    <div class="two wide column">
      <div class="ts inverted segment">
        <div class="ts inverted header">{{ item.number }}</div>
      </div>
    </div>
    <div class="six wide column">
      <div class="ts grid">
        <div class="eight wide column">
          <TocasButton class="primary fluid very compact" :ButtonTitle="plusTitle" v-on:buttonClicked="plusItem"></TocasButton>
        </div>
        <div class="eight wide column">
          <TocasButton class="info fluid very compact" :ButtonTitle="lessTitle" v-on:buttonClicked="lessItem"></TocasButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TocasButton from "./TocasButton.vue";

export default {
  name: "CounterItem",
  components: {
    TocasButton
  },
  data() {
    return {
      deleteTitle: "刪除",
      plusTitle: "+",
      lessTitle: "-"
    };
  },
  props: {
    item: Object
  },
  methods: {
    deleteItem() {
      this.$emit("deleteItem", this.item.id);
    },
    plusItem() {
      this.$emit("plusItem", this.item.id);
    },
    lessItem() {
      this.$emit("lessItem", this.item.id);
    }
  }
};
</script>
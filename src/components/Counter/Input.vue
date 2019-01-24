<template>
  <div class="ts form">
    <div class="field">
      <input type="text" v-model="inputValue">
    </div>
    <div class="field">
      <label></label>
      <TocasButton class="ts button" v-on:buttonClicked="buttonClicked" :ButtonTitle="addButtonTitle"></TocasButton>
    </div>
  </div>
</template>

<script>
import TocasButton from "./TocasButton.vue";

export default {
  name: "Input",
  components: {
    TocasButton
  },
  props: {
    msg: String
  },
  data() {
    return {
        inputValue: "",
        addButtonTitle : "新增項目"
    };
  },
  methods: {
    buttonClicked() {
      this.$emit("buttonClicked", this.inputValue);
      this.inputValue = "";
    }
  }
};
</script>

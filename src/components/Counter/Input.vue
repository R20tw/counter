<template>
  <div class="ts form">
    <div class="field">
      <label></label>
      <input type="text" v-model="inputValue">
    </div>
    <div class="field">
      <label></label>
      <button class="ts button" v-on:click="buttonClicked">新增項目</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Input",
  props: {
    msg: String
  },
  data() {
    return {
      inputValue: ""
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

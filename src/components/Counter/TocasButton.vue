<template>
  <div class="ts massive button" v-on:click="buttonClicked">
    {{ ButtonTitle }}
  </div>
</template>

<script>
export default {
  name: 'TocasButton',
  props: {
    ButtonTitle : String
  }, 
  methods: {
    buttonClicked() {
      this.$emit("buttonClicked", this.inputValue);
    }
  }
}
</script>

<template>
  <div class="ts button">
    {{ title }}
  </div>
</template>

<script>
export default {
  name: 'Button',
  props: {
    title : String
  },
  methods: {
    callParentMethod(){

    }
  }
}
</script>

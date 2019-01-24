<template>
  <div class="counter">
    <Input v-on:buttonClicked="addItem"/>
    <List
      v-bind:items="items"
      v-on:deleteItem="deleteItem"
      v-on:plusItem="plusItem"
      v-on:lessItem="lessItem"
    />
  </div>
</template>

<script>
import Input from "./Counter/Input.vue";
import List from "./Counter/List.vue";

export default {
  name: "Counter",
  components: {
    Input,
    List
  },
  props: {
    items: Array
  },
  methods: {
    addItem(value) {
      if (this.items == undefined) {
        this.items = [];
      }
      var id =
        this.items.length == 0 ? 0 : this.items[this.items.length - 1].id + 1;
      if (value == ""){
        return
      }
      this.items.push({ name: value, number: 0, id: id });
    },
    deleteItem(id) {
      this.items = this.items.filter(el => {
        if (el.id != id) {
          return true;
        }
      });
    },
    plusItem(id) {
      for (var i in this.items) {
        if (this.items[i].id == id) {
          this.items[i].number = this.items[i].number + 1;
          break;
        }
      }
    },
    lessItem(id) {
      for (var i in this.items) {
        if (this.items[i].id == id) {
          if(this.items[i].number == 0){
            return
          }
          this.items[i].number = this.items[i].number - 1;
          break;
        }
      }
    }
  }
};
</script>

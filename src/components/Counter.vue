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

let Base64 = require("js-base64").Base64;

export default {
  name: "Counter",
  components: {
    Input,
    List
  },
  props: {
    items: Array
  },
  created() {
    if (location.hash.length != 0) {
      let data = [];
      let tmp = JSON.parse(Base64.decode(location.hash));
      let i = 0;
      tmp.forEach(el => {
        data.push({
          id: i,
          name: el,
          number: 0
        });
        i = i + 1;
      });
      this.items = data;
    }
  },
  methods: {
    addItem(value) {
      if (this.items == undefined) {
        this.items = [];
      }
      var id =
        this.items.length == 0 ? 0 : this.items[this.items.length - 1].id + 1;
      if (value == "") {
        return;
      }
      this.items.push({ name: value, number: 0, id: id });

      let tmp = [];
      this.items.forEach(el => {
        tmp.push(el.name);
      });
      location.hash = Base64.encode(JSON.stringify(tmp));
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
          if (this.items[i].number == 0) {
            return;
          }
          this.items[i].number = this.items[i].number - 1;
          break;
        }
      }
    }
  }
};
</script>

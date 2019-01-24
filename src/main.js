import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

let Base64 = require('js-base64').Base64;

let data = [];
if(location.hash.length != 0){  
  let tmp = JSON.parse(Base64.decode(location.hash));
  let i = 0;
  tmp.forEach((el) => {
    data.push({
      id : i,
      name : el,
      number: 0
    })
    i=i+1;
  })
}

new Vue({
  render: h => h(App, {
    props: {
      items: data
    }
  })
}).$mount('#app')

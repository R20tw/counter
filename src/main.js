import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App, {
    props: {
      items: [{
        name:"test",
        number:1
      }]
    }
  })
}).$mount('#app')

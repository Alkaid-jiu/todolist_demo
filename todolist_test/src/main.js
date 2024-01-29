import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
beforeCreate(){Vue.prototype.$bus = this}
//安装全局事件总线
// beforeDestroy() {
//   this.$bus.$off('')
// },
}).$mount('#app')

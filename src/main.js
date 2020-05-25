import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

const MagpiePlugin = {}
MagpiePlugin.install = function (Vue) {
    Vue.directive('wait', (el, binding) => {
            setTimeout(() => binding.value(), Number(binding.arg))
        }
    )
}

Vue.use(MagpiePlugin)

new Vue({
    render: h => h(App),
}).$mount('#app')

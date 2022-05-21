import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueClipboard from 'vue-clipboard2'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faHatWizard } from '@fortawesome/free-solid-svg-icons'
import { faWallet } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faWallet)
library.add(faHatWizard)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

VueClipboard.config.autoSetContainer = true
Vue.use(VueClipboard)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

import "bootstrap";
import "../node_modules/boxicons/css/boxicons.min.css";
import "./styles/styles.scss";
import "vue-toast-notification/dist/theme-default.css";

import App from "./App.vue";
import Vue from "vue";
import VueMoment from "vue-moment";
import VuePageTransition from "vue-page-transition";
import VueToast from "vue-toast-notification";
import moment from "moment";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount("#app");

// Page transitions
Vue.use(VuePageTransition);

// Vue toast

Vue.use(VueToast);

// Vue moment
moment.locale("pl");
Vue.use(VueMoment, { moment });

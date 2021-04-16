import "bootstrap";
import "../node_modules/boxicons/css/boxicons.min.css";
import "./styles/styles.scss";

import App from "./App.vue";
import Vue from "vue";
import router from "./router";
import VuePageTransition from "vue-page-transition";
import store from "./store";
import VueMoment from "vue-moment";
import moment from "moment";

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount("#app");

// Page transitions
Vue.use(VuePageTransition);

// Vue moment
moment.locale("pl");
Vue.use(VueMoment, { moment });

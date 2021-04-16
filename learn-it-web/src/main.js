import "bootstrap";
import "../node_modules/boxicons/css/boxicons.min.css";
import "./styles/styles.scss";

import App from "./App.vue";
import Vue from "vue";
import router from "./router";
import VuePageTransition from "vue-page-transition";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount("#app");

Vue.use(VuePageTransition);

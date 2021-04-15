import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Bootstrap 5
import "bootstrap";
import "../node_modules/bootstrap/scss/bootstrap.scss";

// Boxicons
import "../node_modules/boxicons/css/boxicons.min.css";

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount("#app");

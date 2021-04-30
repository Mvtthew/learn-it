<template>
	<div id="app">
		<navbar />
		<main class="container py-5">
			<vue-page-transition name="fade-in-right">
				<router-view />
			</vue-page-transition>
		</main>
		<Footer />
	</div>
</template>

<script>
import { tooltipsMixin } from "./mixins/tooltipsMixin";
import Footer from "./components/Footer.vue";
import Navbar from "./components/Navbar.vue";
export default {
	components: { Navbar, Footer },
	mixins: [tooltipsMixin],
	watch: {
		$route() {
			tooltipsMixin.methods.hideAll();
			tooltipsMixin.methods.init();
		},
	},
};
</script>

<style lang="scss">
main {
	min-height: calc(100vh - 56px - 56px);
	margin-top: 56px;
}
</style>

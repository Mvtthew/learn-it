<template>
	<div id="app">
		<Navbar />
		<main class="container py-5">
			<router-view />
		</main>
		<Footer />
	</div>
</template>

<script>
import Footer from "./components/Footer.vue";
import Navbar from "./components/Navbar.vue";
export default {
	components: { Navbar, Footer },
};
</script>

<style lang="sass">
main
	min-height: calc(100vh - 56px - 56px)
	margin-top: 56px
</style>

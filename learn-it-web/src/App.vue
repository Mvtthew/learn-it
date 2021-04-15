<template>
	<div id="app">
		<Navbar />
		<div class="container py-5">
			<router-view />
		</div>
	</div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
	components: { Navbar },
};
</script>

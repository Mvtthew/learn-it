<template>
	<footer class="bg-dark text-light py-3">
		<div class="container">
			<p class="mb-0"><i class="bx bx-copyright"></i> {{ currentYear }} by Mati</p>
		</div>
	</footer>
</template>

<script>
export default {
	name: "Footer",
	computed: {
		currentYear() {
			return new Date().getFullYear();
		},
	},
};
</script>

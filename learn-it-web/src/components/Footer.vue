<template>
	<footer class="bg-dark text-light py-3">
		<div class="container">
			<div class="row">
				<div class="col">
					<p class="mb-0">
						<i class="bx bx-meteor me-2"></i>Learn<span class="text-primary fw-bold">IT</span> by
						<a href="https://github.com/Mvtthew/">Mati</a>
					</p>
				</div>
				<div class="col text-end">
					<i class="bx bx-copyright"></i>
					{{ currentYear }}
				</div>
			</div>
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

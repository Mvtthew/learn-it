<template>
	<div class="h-screen d-flex align-items-center justify-content-center flex-column">
		<i class="display-1 text-primary bx bx-heart"></i>
		<h5 class="text-white-50">Miłego życia</h5>
	</div>
</template>

<script>
export default {
	name: "Logout",
	created() {
		this.$store.commit("clearToken");
		this.$toast.info("Pomyślnie wylogowano.");
		setTimeout(() => {
			this.$router.push("/login");
		}, 1000);
	},
};
</script>

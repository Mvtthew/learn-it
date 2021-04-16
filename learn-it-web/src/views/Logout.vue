<template>
	<div class="py-5 my-5 d-flex align-items-center justify-content-center flex-column">
		<i class="display-1 text-primary bx bx-heart"></i>
		<h5 class="text-white-50">Wylogowywanie</h5>
	</div>
</template>

<script>
export default {
	name: "Logout",
	created() {
		setTimeout(() => {
			this.$router.push("/login");
		}, 800);
	},
};
</script>

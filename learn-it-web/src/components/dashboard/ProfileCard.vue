<template>
	<div class="profile-card bg-dark rounded-3 p-4">
		<div class="rounded-circle avatar mx-auto mb-4">
			{{ user.login[0] }}{{ user.login[1] }}
			<span class="level bg-primary" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Następny poziom: 600 (brakuje 40)">69</span>
		</div>
		<h4 class="text-center">{{ user.login }}</h4>
		<div class="progress" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Następny poziom: 600 (brakuje 40)">
			<div
				class="progress-bar bg-primary"
				role="progressbar"
				style="width: 45%;"
				aria-valuenow="45"
				aria-valuemin="0"
				aria-valuemax="100"
			></div>
		</div>
		<small class="d-block text-center">560 <i class="bx bx-meteor"></i></small>

		<div class="mt-4 d-flex justify-content-center">
			<button class="btn  btn-outline-primary btn-icon mx-1" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ustawienia konta">
				<i class="bx bx-wrench"></i>
			</button>
			<router-link
				to="/logout"
				class="btn btn-outline-primary btn-icon mx-1"
				data-bs-toggle="tooltip"
				data-bs-placement="bottom"
				title="Wyloguj się"
			>
				<i class="bx bx-log-out"></i>
			</router-link>
		</div>
	</div>
</template>

<script>
export default {
	name: "ProfileCard",
	computed: {
		user() {
			return this.$store.state.user.user;
		},
	},
};
</script>

<style scoped lang="scss">
.avatar {
	width: 120px;
	height: 120px;
	background-color: rgb(37, 37, 37);
	position: relative;
	border-radius: 0.3rem;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 3rem;
	color: rgba(#fff, 0.5);

	.level {
		border-radius: 50px;
		top: 0;
		right: 0;
		position: absolute;
		color: white;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 1.2rem;
		font-weight: 700;
		width: 40px;
		height: 40px;
	}
}
</style>

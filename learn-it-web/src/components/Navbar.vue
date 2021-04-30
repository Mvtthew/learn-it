<template>
	<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
		<div class="container">
			<router-link class="navbar-brand font-fancy" to="/"
				><i class="bx bx-meteor me-2"></i>Learn<span class="text-primary fw-bold">IT</span></router-link
			>
			<button
				class="navbar-toggler"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav ms-auto mb-2 mb-lg-0">
					<li class="nav-item" v-if="isUserLoggedIn">
						<a class="nav-link" href="#">{{ login }}</a>
					</li>
					<li class="nav-item dropdown">
						<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
							Dropdown
						</a>
						<ul class="dropdown-menu" aria-labelledby="navbarDropdown">
							<li><a class="dropdown-item" href="#">Action</a></li>
							<li><a class="dropdown-item" href="#">Another action</a></li>
							<li><hr class="dropdown-divider" /></li>
							<li><a class="dropdown-item" href="#">Something else here</a></li>
						</ul>
					</li>
					<li class="nav-item">
						<a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Logowanie</a>
					</li>
					<li class="nav-item ms-5">
						<router-link to="/dashboard" class="nav-link btn btn-sm btn-primary">
							<i class="bx bxs-dashboard me-2"></i>
							Dashboard
						</router-link>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>

<script>
export default {
	name: "Navbar",
	computed: {
		login() {
			return this.$store.state.user.user.login;
		},
		isUserLoggedIn() {
			return this.$store.getters.isLoggedIn;
		},
	},
};
</script>

<style scoped lang="scss">
.btn {
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	padding-left: 1rem !important;
	padding-right: 1rem !important;
}
</style>

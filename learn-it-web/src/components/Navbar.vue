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
				<ul class="navbar-nav ms-auto">
					<li class="nav-item dropdown" v-if="isUserLoggedIn">
						<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
							<i class="bx bx-user"></i>
							{{ login }}
							<span class="badge bg-primary">69</span>
						</a>
						<ul class="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
							<li><a class="dropdown-item" href="#">Action</a></li>
							<li><a class="dropdown-item" href="#">Another action</a></li>
							<li><hr class="dropdown-divider" /></li>
							<li>
								<router-link to="/logout" class="dropdown-item">
									<i class="bx bx-log-out"></i>
									Wyloguj się
								</router-link>
							</li>
						</ul>
					</li>
					<li class="nav-item ms-2" v-if="isUserLoggedIn">
						<router-link to="/dashboard" class="nav-link btn btn-sm btn-primary">
							<i class="bx bxs-dashboard me-2"></i>
							Dashboard
						</router-link>
					</li>
					<li class="nav-item" v-else>
						<router-link to="/login" class="nav-link">Logowanie</router-link>
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

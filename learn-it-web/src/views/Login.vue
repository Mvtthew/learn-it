<template>
	<div>
		<h1>
			<i class="bx bx-log-in"></i>
			Logowanie
		</h1>
		<p>Zaloguj się i zacznij naukę</p>
		<div class="row pt-5 pb-4">
			<div class="col-lg-5">
				<login-form :form="form"></login-form>
			</div>
		</div>
		<button class="btn btn-lg btn-primary" @click="login">Zaloguj się <i class="bx bx-caret-right"></i></button>
		<div class="mt-2">
			<router-link to="/register">Nie masz konta?</router-link>
		</div>
	</div>
</template>

<script>
import LoginForm from "../components/login/LoginForm.vue";
import config from "../config/config";

export default {
	components: { LoginForm },
	name: "Login",
	data() {
		return {
			form: {
				login: "",
				password: "",
			},
		};
	},
	created() {
		if (this.$store.getters.isLoggedIn) this.$router.push("/dashboard");
	},
	methods: {
		async login() {
			this.$toast.info("Autoryzacja...");
			const res = await fetch(`${config.apiUrl}auth`, {
				method: "POST",
				headers: {
					"Content-type": "application/json",
				},
				body: JSON.stringify({ login: this.form.login, password: this.form.password }),
			});
			const data = await res.json();
			if (!data.error) {
				this.$store.commit("setToken", data);
				this.$store.dispatch("getLoggedUser");
				this.$toast.success("Poprawne dane logowania");
				setTimeout(() => {
					this.$router.push("/dashboard");
				}, 500);
			} else {
				this.$toast.error("Niepoprawne dane logowania");
			}
		},
	},
};
</script>

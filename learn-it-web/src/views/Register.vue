<template>
	<div>
		<h1>
			<i class="bx bx-user-plus"></i>
			Rejestracja
		</h1>
		<p>Stwórz konto i rozpocznij organizować swoją naukę</p>
		<div class="row pt-5 pb-4" @keypress="enterRegister">
			<div class="col-lg-5">
				<register-form :form="form"></register-form>
			</div>
		</div>
		<button class="btn btn-lg btn-primary" @click="register">Zarejestruj się <i class="bx bx-caret-right"></i></button>
		<div class="mt-2">
			<router-link to="/login">Masz już konto?</router-link>
		</div>
	</div>
</template>

<script>
import RegisterForm from "../components/register/RegisterForm.vue";
import config from "../config/config";
export default {
	components: { RegisterForm },
	name: "Register",
	data() {
		return {
			form: {
				login: "",
				email: "",
				password: "",
				check: false,
			},
		};
	},
	methods: {
		enterRegister(event) {
			if (event.key == "Enter") this.register();
		},
		async register() {
			if (!this.form.check) {
				this.$toast.error("Musisz wyrazić zgodę na rejestrację oraz zaakceptować regularmin.");
				return;
			}
			const res = await fetch(`${config.apiUrl}users`, {
				method: "POST",
				headers: {
					"Content-type": "application/json",
				},
				body: JSON.stringify(this.form),
			});
			const data = await res.json();
			if (!data.error) {
				this.$toast.success(`Poprawnie zarejestrowano (login: ${this.form.login}), możesz się zalogować.`);
				this.$router.push("/login");
			} else {
				if (data.message == "You need to provide all fields.") {
					this.$toast.error("Wpełnij wszystkie pola formularza.");
				}
				if (data.message == "User with this login already exists.") {
					this.$toast.error("Użytkownik z takim loginem już istnieje.");
				}
				if (data.message == "User with this email already exists.") {
					this.$toast.error("Użytkownik z takim adresem email już istnieje.");
				}
			}
			console.log(data);
		},
	},
};
</script>

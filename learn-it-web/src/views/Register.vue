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
		<button class="btn btn-lg btn-primary">Zarejestruj się <i class="bx bx-caret-right"></i></button>
		<div class="mt-2">
			<router-link to="/login">Masz już konto?</router-link>
		</div>
	</div>
</template>

<script>
import RegisterForm from "../components/register/RegisterForm.vue";
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
		register() {
			console.log(1);
		},
	},
};
</script>

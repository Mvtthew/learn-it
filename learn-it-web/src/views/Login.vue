<template>
	<div>
		<h1>
			<i class="bx bx-log-in"></i>
			Logowanie
		</h1>
		<p>Zaloguj się i zacznij naukę</p>
		<div class="row pt-5 pb-4">
			<div class="col-lg-5">
				<login-form></login-form>
			</div>
		</div>
		<router-link to="/dashboard" class="btn btn-lg btn-primary">Zaloguj się <i class="bx bx-caret-right"></i></router-link>
	</div>
</template>

<script>
import LoginForm from "../components/login/LoginForm.vue";
export default {
	components: { LoginForm },
	name: "Login",
};
</script>

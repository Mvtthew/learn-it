<template>
	<div class="login-form">
		<div class="form-floating mb-2">
			<input type="text" class="form-control" id="login" placeholder="Login" v-model="form.login" />
			<label for="login">Login</label>
		</div>
		<div class="form-floating mb-2">
			<input type="password" class="form-control" id="password" placeholder="Pasword" v-model="form.password" />
			<label for="password">Password</label>
		</div>
		<div class="form-check form-switch">
			<input class="form-check-input" type="checkbox" id="remember-me" v-model="form.remember" />
			<label class="form-check-label" for="remember-me">Zapamiętaj mnie</label>
		</div>
	</div>
</template>

<script>
export default {
	name: "LoginForm",
	props: {
		form: {
			type: Object,
			required: true,
		},
	},
};
</script>

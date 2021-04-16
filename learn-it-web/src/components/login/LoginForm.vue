<template>
	<div class="login-form">
		<div class="form-floating mb-2">
			<input type="email" class="form-control" id="login" placeholder="Login" />
			<label for="login">Login</label>
		</div>
		<div class="form-floating mb-2">
			<input type="password" class="form-control" id="password" placeholder="Pasword" />
			<label for="password">Password</label>
		</div>
		<div class="form-check form-switch">
			<input class="form-check-input" type="checkbox" id="remember-me" checked />
			<label class="form-check-label" for="remember-me">Zapamiętaj mnie</label>
		</div>
	</div>
</template>

<script>
export default {
	name: "LoginForm",
};
</script>

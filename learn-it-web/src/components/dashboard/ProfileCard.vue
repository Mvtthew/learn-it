<template>
	<div class="profile-card position-sticky bg-dark rounded-3 p-5">
		<div class="rounded-circle avatar mx-auto mb-4">
			UN
			<span class="level bg-primary">69</span>
		</div>
		<h4 class="text-center">Username</h4>
	</div>
</template>

<style scoped lang="scss">
.profile-card {
	top: calc(56px + 3rem);
}
.avatar {
	width: 150px;
	height: 150px;
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

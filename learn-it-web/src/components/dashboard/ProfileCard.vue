<template>
	<div class="profile-card">
		<div class="rounded-circle avatar mx-auto mb-4">
			<span class="level">69</span>
		</div>
		<h4 class="text-center">Username</h4>
	</div>
</template>

<style scoped lang="scss">
.avatar {
	width: 150px;
	height: 150px;
	background-color: black;
	position: relative;
	border-radius: 0.3rem;

	.level {
		border-radius: 50px;
		background-color: white;
		top: 0;
		right: 0;
		position: absolute;
		color: black;
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

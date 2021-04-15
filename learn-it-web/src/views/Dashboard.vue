<template>
	<div class="d-flex">
		<div class="content"></div>
		<div class="sidebar bg-primary rounded-3 p-4">
			<Profile-card></Profile-card>
		</div>
	</div>
</template>

<script>
import ProfileCard from "../components/dashboard/ProfileCard.vue";
export default {
	components: {
		ProfileCard,
	},
	name: "Dashboard",
};
</script>

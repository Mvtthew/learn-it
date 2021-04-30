<template>
	<div class="d-xl-flex">
		<div class="sidebar position-sticky">
			<profile-card class="mb-3"></profile-card>
			<profile-stats-card></profile-stats-card>
		</div>
		<div class="content">
			<h1>
				Witaj <span class="text-primary">{{ user.login }}</span>
			</h1>
			<p>Jest {{ now | moment("dddd, DD MMMM YYYY") }}, godzina {{ now | moment("HH:mm:ss") }}</p>
			<today-task-card></today-task-card>
			<courses-summary-card></courses-summary-card>
		</div>
	</div>
</template>

<script>
import CoursesSummaryCard from "../components/dashboard/CoursesSummaryCard.vue";
import ProfileCard from "../components/dashboard/ProfileCard.vue";
import ProfileStatsCard from "../components/dashboard/ProfileStatsCard.vue";
import TodayTaskCard from "../components/dashboard/NewestTaskCard.vue";
export default {
	name: "Dashboard",
	components: {
		ProfileCard,
		CoursesSummaryCard,
		TodayTaskCard,
		ProfileStatsCard,
	},
	data() {
		return {
			now: new Date(),
		};
	},
	computed: {
		user() {
			return this.$store.state.user.user;
		},
	},
	created() {
		setInterval(() => {
			this.now = new Date();
		}, 1000);
	},
};
</script>

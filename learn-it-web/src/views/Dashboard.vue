<template>
	<div class="d-flex">
		<div class="content">
			<h1>Witaj <span class="text-primary">USERNAME</span></h1>
			<p>Jest {{ new Date() | moment("dddd, DD MMMM YYYY") }}</p>
			<today-task></today-task>
			<courses-summary></courses-summary>
		</div>

		<div class="sidebar position-sticky">
			<profile-card class="mb-3"></profile-card>
			<profile-stats></profile-stats>
		</div>
	</div>
</template>

<script>
import CoursesSummary from "../components/dashboard/CoursesSummary.vue";
import ProfileCard from "../components/dashboard/ProfileCard.vue";
import ProfileStats from "../components/dashboard/ProfileStats.vue";
import TodayTask from "../components/dashboard/TodayTask.vue";
export default {
	components: {
		ProfileCard,
		CoursesSummary,
		TodayTask,
		ProfileStats,
	},
	name: "Dashboard",
};
</script>

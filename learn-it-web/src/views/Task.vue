<template>
	<div>
		<h1>TASK TITLE</h1>
		<div class="mb-5">
			<span class="badge bg-primary me-2">JS</span>
			<span class="badge bg-primary me-2">localstorage</span>
			<span class="badge bg-primary me-2">fetch</span>
			<span class="badge bg-primary me-2">API</span>
			<span class="badge bg-primary me-2">JS classes</span>
			<span class="badge bg-primary me-2">JS functions</span>
		</div>
		<div class="task-md bg-dark p-5">
			<div v-html="taskHtml"></div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Task",
	data() {
		return {
			taskHtml: "",
		};
	},
	created() {
		this.getTaskHtml(this.$route.params.id);
	},
	methods: {
		getTaskHtml(taskId) {
			fetch(`http://localhost:5069/tasks/${taskId}`)
				.then((res) => res.text())
				.then((data) => (this.taskHtml = data));
		},
	},
};
</script>

<style scoped lang="scss">
.task-md {
	h1 {
		font-size: 5rem;
	}
}
</style>

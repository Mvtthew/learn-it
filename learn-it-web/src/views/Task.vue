<template>
	<div>
		<h1>TASK COŚ</h1>
		<div class="task-md">
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
};
</script>

<style scoped lang="scss">
.task-md {
	h1 {
		font-size: 5rem;
	}
}
</style>

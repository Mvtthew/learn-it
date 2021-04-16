<template>
	<div class="bg-dark rounded-3 p-5 mt-5 position-relative">
		<div class="done">
			<i class="bx bx-check-double text-primary"></i>
			<small>Zadanie wykonane</small>
		</div>
		<h2>
			<i class="bx bx-meteor text-primary"></i>
			Dzisiejsze zadanie
		</h2>
		<p class="mb-5">Sprawdź swoje umiejętności w dzisiejszym zadaniu</p>
		<a href="#" class="btn btn-lg btn-primary">
			Przejdź do zadania
			<i class="bx bx-chevron-right"></i>
		</a>
	</div>
</template>

<script>
export default {
	name: "TodayTask",
};
</script>

<style lang="scss" scoped>
.done {
	position: absolute;
	top: 1rem;
	right: 3rem;
	display: flex;
	flex-direction: column;
	align-items: center;

	i {
		font-size: 6rem;
	}
}
</style>

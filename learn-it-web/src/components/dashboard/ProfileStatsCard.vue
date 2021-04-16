<template>
	<div class="profile-card position-sticky bg-dark rounded-3 p-4">
		<h5 class="mb-3 d-flex justify-content-between">
			<i class="bx bx-check-double text-primary"></i>
			Statystyki zadań
		</h5>
		<div class="d-flex w-100 justify-content-between">
			<span>
				<i class="bx bx-check"></i>
				Wykonane zadania
			</span>
			<span class="fw-bold">53</span>
		</div>
		<div class="d-flex w-100 justify-content-between">
			<span>
				<i class="bx bx-badge-check"></i>
				Zadania na 100%
			</span>
			<span class="fw-bold">13</span>
		</div>

		<hr />

		<h5 class="mb-3 d-flex justify-content-between">
			<i class="bx bx-paint-roll text-primary"></i>
			Statystyki kursów
		</h5>
		<div class="d-flex w-100 justify-content-between">
			<span>
				<i class="bx bx-flag"></i>
				Kursy rozpoczęte
			</span>
			<span class="fw-bold">3</span>
		</div>
		<div class="d-flex w-100 justify-content-between">
			<span>
				<i class="bx bx-calendar-check"></i>
				Kursy zakończone
			</span>
			<span class="fw-bold">0</span>
		</div>
		<div class="d-flex w-100 justify-content-between">
			<span>
				<i class="bx bx-trip"></i>
				Średi postęp kursu
			</span>
			<span class="fw-bold">34%</span>
		</div>

		<hr />

		<h5 class="mb-3 d-flex justify-content-between">
			<i class="bx bx-question-mark text-primary"></i>
			Statystyki pytań
		</h5>
		<div class="d-flex w-100 justify-content-between">
			<span>
				<i class="bx bx-flag"></i>
				Zadanych pytań
			</span>
			<span class="fw-bold">49</span>
		</div>
	</div>
</template>

<script>
export default {
	name: "ProfileStatsCard",
};
</script>

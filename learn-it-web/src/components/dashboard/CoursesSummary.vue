<template>
	<div class="bg-dark rounded-3 p-5 mt-5">
		<h2>
			<i class="bx bx-paint-roll text-primary"></i>
			Twój postęp kursów
		</h2>
		<p class="mb-5">Sprawdzaj oraz kontroluj swój postęp</p>
		<div class="mb-4">
			<h4>
				<i class="bx bxl-javascript"></i>
				Kurs programowania JS
			</h4>
			<div class="progress mb-2">
				<div
					class="progress-bar progress-bar-striped progress-bar-animated"
					role="progressbar"
					style="width: 25%;"
					aria-valuenow="25"
					aria-valuemin="0"
					aria-valuemax="100"
				>
					25%
				</div>
			</div>
			<a href="#" class="btn btn-sm btn-outline-primary"> Kontynuuj kurs <i class="bx bx-chevron-right"></i> </a>
		</div>
		<div>
			<h4>
				<i class="bx bxl-react"></i>
				Kurs React
			</h4>
			<div class="progress mb-2">
				<div
					class="progress-bar progress-bar-striped progress-bar-animated"
					role="progressbar"
					style="width: 69%;"
					aria-valuenow="69"
					aria-valuemin="0"
					aria-valuemax="100"
				>
					69%
				</div>
			</div>
			<a href="#" class="btn btn-sm btn-outline-primary"> Kontynuuj kurs <i class="bx bx-chevron-right"></i> </a>
		</div>
	</div>
</template>

<script>
export default {
	name: "CoursesSummary",
};
</script>

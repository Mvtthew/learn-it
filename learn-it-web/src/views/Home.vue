<template>
	<div class="home">
		<div class="p-5 mb-5 bg-dark rounded-3 d-flex align-items-center">
			<div class="me-5">
				<h1 class="display-1">
					<i class="bx bxs-truck"></i>
				</h1>
			</div>
			<div>
				<h1 class="display-1">Learn<span class="text-primary fw-bold">IT</span></h1>
				<p class="mb-4">Najlepsza aplikacja do nauki <strong>wszystkiego</strong>.</p>
				<router-link to="/login" class="btn btn-primary me-2 btn-lg">
					Rozpocznij naukę
					<i class="bx bx-caret-right ms-1"></i>
				</router-link>
			</div>
		</div>
		<div class="mb-5">
			<h1 class="text-center mb-4">Co tu sie robi?</h1>
			<div class="row justify-content-center">
				<div class="col-lg-4 text-center">
					<div class="p-4 rounded-3">
						<i class="bx bx-alarm display-1 text-primary"></i>
						<h4 class="mb-4">Zadania</h4>
						<p>Wykonuj zadania oraz sprawdzaj siebie w codziennych konkursach</p>
					</div>
				</div>
				<div class="col-lg-4 text-center">
					<div class="p-4 rounded-3">
						<i class="bx bx-question-mark display-1 text-primary"></i>
						<h4 class="mb-4">Odpowiedzi</h4>
						<p>Zadawaj pytania i otrzymuj odpowiedzi</p>
					</div>
				</div>
			</div>
		</div>
		<div>
			<h3 class="text-center">Po co to komu?</h3>
			<p class="text-center">Są pytania, na które nie ma odpowiedzi.</p>
		</div>
	</div>
</template>

<script>
export default {
	name: "Home",
};
</script>

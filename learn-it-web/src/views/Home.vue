<template>
	<div class="home">
		<div class="p-5 mb-5 bg-light rounded-3 d-flex align-items-center">
			<div class="me-5">
				<h1 class="display-1">
					<i class="bx bxs-truck"></i>
				</h1>
			</div>
			<div>
				<h1 class="display-1">
					LearnIT
				</h1>
				<p class="mb-4">Najlepsza aplikacja do nauki wszystkiego</p>
				<button class="btn btn-primary me-2 btn-lg">
					Rozpocznij naukę
					<i class="bx bx-caret-right ms-1"></i>
				</button>
			</div>
		</div>
		<div class="mb-5">
			<h1 class="text-center mb-4">Co tu sie robi?</h1>
			<div class="row">
				<div class="col text-center">
					<div class="p-4 bg-light rounded-3">
						<i class="bx bx-accessibility display-1"></i>
						<h4>Kursy</h4>
						<p>Ucz się z kursami, którę tutaj kiedyś będą</p>
					</div>
				</div>
				<div class="col text-center">
					<div class="p-4 bg-light rounded-3">
						<i class="bx bx-alarm display-1"></i>
						<h4>Zadania</h4>
						<p>Wykonuj zadania oraz sprawdzaj siebie w codziennych konkursach</p>
					</div>
				</div>
				<div class="col text-center">
					<div class="p-4 bg-light rounded-3">
						<i class="bx bx-question-mark display-1"></i>
						<h4>Odpowiedzi</h4>
						<p>Zadawaj pytania i otrzymuj odpowiedzi</p>
					</div>
				</div>
			</div>
		</div>
		<div>
			<h2>Po co to komu?</h2>
			<p>Są pytania, na które nie ma odpowiedzi.</p>
		</div>
	</div>
</template>

<script>
export default {
	name: "Home",
};
</script>

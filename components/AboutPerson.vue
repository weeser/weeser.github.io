<template>
	<section>
		<h1 class="text-3xl font-semibold">{{ title }}</h1>



		<PrimeCard class="mt-2" v-for="(card, index) in cards" :key="index">
			<template #title>
				<h2>{{ card.title }}</h2>
			</template>
			<template #content>
				<div :class="{ 'flex flex-row': card.image }">
					<div class="card flex m-5" v-if="card.image">
						<PrimeImage :src="card.image.file" :alt="card.image.altText" />
					</div>
					<p v-for="(text, index) in card.content" :key="index" :class="{ 'mt-3': index !== 0 }">
						{{ text }}
					</p>
					
				</div>
			</template>
			<template #footer v-if="card.tags.length > 0">
				<div class="flex flex-row flex-wrap gap-4 mt-1">
					<PrimeChip v-for="(text, index) in card.tags" :key="index" :label="text" />
				</div>
			</template>
		</PrimeCard>
	</section>
</template>
<script setup>
defineProps({ title: String, cards: Array })
</script>

<style scoped></style>
<template>
	<section class="space-y-4">
		<h1 class="section-title">{{ title }}</h1>
		<PrimeCard
			class="surface-panel overflow-hidden border-0"
			v-for="(card, index) in cards"
			:key="index"
		>
			<template #title>
				<div class="flex items-center gap-3">
					<span class="h-8 w-1.5 rounded-full bg-[color:var(--site-accent)]" />
					<h2 class="text-2xl font-semibold">{{ card.title }}</h2>
				</div>
			</template>
			<template #content>
				<div class="grid gap-6" :class="card.image ? 'md:grid-cols-[220px_1fr] md:items-start' : ''">
					<div class="card" v-if="card.image">
						<PrimeImage
							:src="card.image.file"
							:alt="card.image.altText"
							imageClass="w-full rounded-2xl border border-[color:var(--site-border)] shadow-md"
						/>
					</div>
					<div class="w-full">
						<p v-for="(text, index) in card.content" :key="index" :class="{ 'mt-4': index !== 0 }">
							{{ text }}
						</p>
					</div>
				</div>
			</template>
			<template #footer v-if="card.tags.length > 0">
				<div class="mt-2 flex flex-row flex-wrap gap-3 border-t border-[color:var(--site-border)] pt-4">
					<PrimeChip
						v-for="(text, index) in card.tags"
						:key="index"
						:label="text"
						class="border border-[color:var(--site-border)] bg-[color:var(--site-highlight)] text-[color:var(--site-ink)]"
					/>
				</div>
			</template>
		</PrimeCard>
	</section>
</template>
<script setup>
defineProps({ title: String, cards: Array })
</script>

<style scoped></style>
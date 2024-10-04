<template>
	<PrimePanel header="Work Experience" toggleable>
		<PrimeDataTable :value="workExperience" class="px-12" size="small" tableStyle="min-width: 25rem" stripedRows>
			<PrimeColumn header="Position">
				<template #body="slotProps">
					<h3 class="font-bold">
						<span>{{ slotProps.data.position }}</span>
					</h3>

					<p v-if="slotProps.data.responsibilities.length === 1">{{ slotProps.data.responsibilities[0] }}</p>
					<ul v-else>
						<li v-for="(responsibility, index) in slotProps.data.responsibilities" :key="index">
							{{ responsibility }}
						</li>
					</ul>
				</template>
			</PrimeColumn>
			<PrimeColumn field="company" header="Company"></PrimeColumn>
			<PrimeColumn field="location" header="Location"></PrimeColumn>
			<PrimeColumn field="years" header="Years"></PrimeColumn>
		</PrimeDataTable>
	</PrimePanel>
</template>

<script setup>
defineProps(['workExperience'])
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
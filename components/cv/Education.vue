<template>
	<PrimePanel header="Education" toggleable>
		<PrimeDataTable :value="education" class="px-12" size="small" tableStyle="min-width: 25rem" stripedRows>
			<PrimeColumn header="Degree">
				<template #body="slotProps">
					<h3>
						<span >{{ slotProps.data.degree }}</span>
					</h3>
					<span class="italic">{{ slotProps.data.description }}</span>
				</template>
			</PrimeColumn>
			<PrimeColumn field="institution" header="Institution"></PrimeColumn>
			<PrimeColumn field="location" header="Location"></PrimeColumn>
			<PrimeColumn field="years" header="Years"></PrimeColumn>
		</PrimeDataTable>
	</PrimePanel>
</template>

<script setup>
defineProps(['education'])
</script>

<style scoped>

</style>
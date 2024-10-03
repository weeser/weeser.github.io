<template>
	<PrimePanel header="Awards" toggleable>
		<PrimeDataTable :value="awards" class="px-12" size="small" tableStyle="min-width: 25rem" stripedRows>
			<PrimeColumn header="Position">
				<template #body="slotProps">
					<h3>
						<span>{{ slotProps.data.name }}</span> 
						<span v-if="slotProps.data.placement"> - {{ slotProps.data.placement }}</span>
					</h3>					
				</template>
			</PrimeColumn>
			<PrimeColumn field="organization" header="Organization"></PrimeColumn>
			<PrimeColumn field="years" header="Years"></PrimeColumn>
		</PrimeDataTable>
	</PrimePanel>
</template>

<script setup>
defineProps(['awards'])
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
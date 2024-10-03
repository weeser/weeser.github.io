<template>
	<PrimePanel header="Student Projects" toggleable>
		<PrimeDataTable :value="ugProjects" class="px-12" size="small" tableStyle="min-width: 25rem" stripedRows>
			<PrimeColumn field="students" header="Student Names"></PrimeColumn>
			<PrimeColumn field="term" header="Term"></PrimeColumn>
			<PrimeColumn field="project" header="Project"></PrimeColumn>
		</PrimeDataTable>
	</PrimePanel>
</template>

<script setup>
defineProps(['ugProjects'])
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
<template>
	<PrimePanel header="Student Projects" toggleable>
		<PrimeDataTable :value="ugProjects" class="px-12" size="small" tableStyle="min-width: 25rem" stripedRows>
			<PrimeColumn field="students" header="Student Names" style="width: 40%;" sortable></PrimeColumn>
			<PrimeColumn field="project" header="Project" sortable>
				<template #body="slotProps">
					<div>{{ slotProps.data.project }}</div>
					<small v-if="slotProps.data.description" class="project-description">{{ slotProps.data.description }}</small>
				</template>
			</PrimeColumn>
			<PrimeColumn field="term" header="Term" sortable></PrimeColumn>
		</PrimeDataTable>
	</PrimePanel>
</template>

<script setup>
defineProps(['ugProjects'])
</script>

<style scoped>
.project-description {
	display: block;
	margin-top: 0.25rem;
	color: var(--text-color-secondary);
	line-height: 1.35;
}
</style>
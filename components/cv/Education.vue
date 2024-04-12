<template>
	<Panel header="Education" toggleable>
		<DataTable :value="education" class="px-4" size="small" tableStyle="min-width: 50rem" stripedRows>
			<Column header="Degree">
				<template #body="slotProps">
					<h3>
						<span >{{ slotProps.data.degree }}</span>
					</h3>
					<span class="font-italic">{{ slotProps.data.description }}</span>
				</template>
			</Column>
			<Column field="institution" header="Institution"></Column>
			<Column field="location" header="Location"></Column>
			<Column field="years" header="Years"></Column>
		</DataTable>
	</Panel>
</template>

<script setup>
defineProps(['education'])
</script>

<style scoped>

</style>
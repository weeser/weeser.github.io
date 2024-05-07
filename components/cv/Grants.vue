<template>
	<Panel header="Grants" toggleable>
		<DataTable :value="grants" class="px-4" size="small" tableStyle="min-width: 50rem" stripedRows>
			<Column header="Title">
				<template #body="slotProps">
					<Panel :header="slotProps.data.title" toggleable>
						<p class="m-0">
							{{ slotProps.data.abstract }}
						</p>
					</Panel>
				</template>
			</Column>
			<Column field="awardAmount" header="Amount"></Column>
		</DataTable>
	</Panel>
</template>

<script setup>
defineProps(['test', 'grants'])
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
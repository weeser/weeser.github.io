<template>
	<Panel header="Grants" toggleable>
		<DataTable :value="grants" sortField="endDate" sortOrder="-1" class="px-4" size="small" tableStyle="min-width: 50rem" stripedRows>
			<Column header="Title">
				<template #body="slotProps">
					<Panel :header="slotProps.data.title" toggleable collapsed>
						<p class="m-0">
							{{ slotProps.data.abstract }}
						</p>
					</Panel>
				</template>
			</Column>
			<Column header="Dates" style="width: 125px;">
				<template #body="slotProps">
					{{ slotProps.data.startDate }} &ndash; {{ slotProps.data.endDate }}
				</template>
			</Column>
			<Column field="role" header="Role" style="width: 70px;"></Column>
			<Column field="institution" header="Host Institution"></Column>
			<Column field="agency" header="Awarding Agency"></Column>
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
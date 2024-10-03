<template>
	<PrimePanel header="Grants" toggleable>
		<PrimeDataTable :value="grants" sortField="endDate" :sortOrder="-1" class="px-12" size="small" tableStyle="min-width: 25rem" stripedRows>
			<PrimeColumn header="Title">
				<template #body="slotProps">
					<PrimePanel :header="slotProps.data.title" toggleable collapsed>
						<p class="m-0">
							{{ slotProps.data.abstract }}
						</p>
					</PrimePanel>
				</template>
			</PrimeColumn>
			<PrimeColumn header="Dates" style="width: 125px;">
				<template #body="slotProps">
					{{ slotProps.data.startDate }} &ndash; {{ slotProps.data.endDate }}
				</template>
			</PrimeColumn>
			<PrimeColumn field="role" header="Role" style="width: 70px;"></PrimeColumn>
			<PrimeColumn field="institution" header="Host Institution"></PrimeColumn>
			<PrimeColumn field="agency" header="Awarding Agency"></PrimeColumn>
			<PrimeColumn field="awardAmount" header="Amount"></PrimeColumn>
		</PrimeDataTable>
	</PrimePanel>
</template>

<script setup>
defineProps(['test', 'grants'])
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
<template>
	<PrimePanel :header="serviceHeader" toggleable>
		<PrimeDataTable :value="service" class="px-12" tableStyle="min-width: 25rem" size="small" stripedRows>
            <PrimeColumn field="activity" header="Description">
				<template #body="slotProps">
					<PrimePanel v-if="slotProps.data.description" :header="slotProps.data.activity" toggleable collapsed>
						<p class="m-0">
							{{ slotProps.data.description }}
						</p>
					</PrimePanel>
					<div v-else>
						{{ slotProps.data.activity }}
					</div>
				</template>
			</PrimeColumn>
            <PrimeColumn field="years" header="Years"></PrimeColumn>
        </PrimeDataTable>		
	</PrimePanel>
</template>

<script setup>
defineProps(['service','serviceHeader'])
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
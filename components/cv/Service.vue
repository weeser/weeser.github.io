<template>
	<PrimePanel :header="serviceHeader" toggleable>
		<PrimeDataTable :value="service" class="px-6" tableStyle="min-width: 50rem" size="small" stripedRows>
            <PrimeColumn field="activity" header="Description"></PrimeColumn>
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
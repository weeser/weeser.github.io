<template>
	<Panel :header="serviceHeader" toggleable>
		<DataTable :value="service" class="px-4" tableStyle="min-width: 50rem" size="small" stripedRows>
            <Column field="activity" header="Description"></Column>
            <Column field="years" header="Years"></Column>
        </DataTable>		
	</Panel>
</template>

<script setup>
defineProps(['service','serviceHeader'])
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
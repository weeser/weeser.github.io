<template>
	<Panel header="Awards" toggleable>
		<DataTable :value="awards" class="px-4" size="small" tableStyle="min-width: 50rem" stripedRows>
			<Column header="Position">
				<template #body="slotProps">
					<h3>
						<span>{{ slotProps.data.name }}</span> 
						<span v-if="slotProps.data.placement"> - {{ slotProps.data.placement }}</span>
					</h3>					
				</template>
			</Column>
			<Column field="organization" header="Organization"></Column>
			<Column field="years" header="Years"></Column>
		</DataTable>
	</Panel>
</template>

<script setup>
defineProps(['awards'])
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
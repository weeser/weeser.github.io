<template>
	<Panel header="Work Experience" toggleable>
		<DataTable :value="workExperience" class="px-4" size="small" tableStyle="min-width: 50rem" stripedRows>
			<Column header="Position">
				<template #body="slotProps">
					<h3>
						<span>{{ slotProps.data.position }}</span>
					</h3>

					<p v-if="slotProps.data.responsibilities.length === 1">{{ slotProps.data.responsibilities[0] }}</p>
					<ul v-else>
						<li v-for="(responsibility, index) in slotProps.data.responsibilities" :key="index">
							{{ responsibility }}
						</li>
					</ul>
				</template>
			</Column>
			<Column field="company" header="Company"></Column>
			<Column field="location" header="Location"></Column>
			<Column field="years" header="Years"></Column>
		</DataTable>
	</Panel>
</template>

<script setup>
defineProps(['workExperience'])
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
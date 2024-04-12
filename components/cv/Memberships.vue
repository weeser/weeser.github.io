<template>
	<Panel header="Memberships" toggleable>
		<DataTable :value="memberships" class="px-4" size="small" tableStyle="min-width: 50rem" stripedRows>
			<Column header="Organization">
				<template #body="slotProps">
					<h3 v-if="slotProps.data.organization">
						<a v-if="slotProps.data.link" :href="slotProps.data.link" target="_blank">
							{{ slotProps.data.organization }}
						</a>
						<span v-else>
							{{ slotProps.data.organization }}
						</span>
					</h3>
					<p>
						<span v-if="slotProps.data.chapter">{{ slotProps.data.chapter }}&nbsp;</span>
						<span v-if="slotProps.data.position">{{ slotProps.data.position }}&nbsp;</span>
						<span v-if="slotProps.data.institution">{{ slotProps.data.institution }},&nbsp;</span>
						<span v-if="slotProps.data.location">{{ slotProps.data.location }}</span>
					</p>
				</template>
			</Column>
			<Column field="years" header="Years"></Column>
		</DataTable>
	</Panel>
</template>

<script setup>
defineProps(['memberships'])
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
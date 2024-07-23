<template>
	<PrimePanel header="Memberships" toggleable>
		<PrimeDataTable :value="memberships" class="px-12" size="small" tableStyle="min-width: 50rem" stripedRows>
			<PrimeColumn header="Organization">
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
			</PrimeColumn>
			<PrimeColumn field="years" header="Years"></PrimeColumn>
		</PrimeDataTable>
	</PrimePanel>
</template>

<script setup>
defineProps(['memberships'])
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
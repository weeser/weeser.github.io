<template>
	<Panel header="Teaching" toggleable>
		<DataTable :value="coursesTaught" class="px-4" size="small" tableStyle="min-width: 50rem" stripedRows>
			<Column header="Course">
				<template #body="slotProps">
					<h3>
						<span v-if="slotProps.data.course_code">{{ slotProps.data.course_code }} - </span>
						{{ slotProps.data.course_title }}
					</h3>
					<p>{{ slotProps.data.description }}</p>
				</template>
			</Column>
			<Column field="years" header="Years"></Column>
		</DataTable>
	</Panel>
</template>

<script setup>
defineProps(['coursesTaught'])
</script>

<style scoped></style>
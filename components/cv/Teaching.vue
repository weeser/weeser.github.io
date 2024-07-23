<template>
	<PrimePanel header="Teaching" toggleable>
		<PrimeDataTable :value="coursesTaught" class="px-12" size="small" tableStyle="min-width: 50rem" stripedRows>
			<PrimeColumn header="Course">
				<template #body="slotProps">
					<h3>
						<span v-if="slotProps.data.course_code">{{ slotProps.data.course_code }} - </span>
						{{ slotProps.data.course_title }}
					</h3>
					<p>{{ slotProps.data.description }}</p>
				</template>
			</PrimeColumn>
			<PrimeColumn field="years" header="Years"></PrimeColumn>
		</PrimeDataTable>
	</PrimePanel>
</template>

<script setup>
defineProps(['coursesTaught'])
</script>

<style scoped></style>
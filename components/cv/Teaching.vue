<template>
	<PrimePanel header="Teaching" toggleable>
		<PrimeDataTable :value="coursesTaught" class="px-12" size="small" tableStyle="min-width: 25rem" stripedRows>
			<PrimeColumn header="Course" style="width: 85%">
				<template #body="slotProps">
					<h3 class="font-bold">
						<span v-if="slotProps.data.course_code">{{ slotProps.data.course_code }} - </span>
						{{ slotProps.data.course_title }}
					</h3>
					<p class="pl-5">{{ slotProps.data.description }}</p>
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
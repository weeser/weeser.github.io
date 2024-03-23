<template>
	<Panel header="Teaching" toggleable>
		<ul>
			<li v-for="(entry, index) in coursesTaught" :key="index">
				<h3>{{ entry.course_code }}</h3>
				<p>{{ entry.course_title }}</p>
				<p>{{ entry.description }}</p>
				<p>{{ entry.years }}</p>
			</li>
		</ul>
	</Panel>
</template>

<script setup>
defineProps(['coursesTaught'])
</script>

<style scoped>

</style>
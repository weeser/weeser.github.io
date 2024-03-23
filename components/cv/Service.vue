<template>
	<Panel header="Work Experience" toggleable>
		<ul>
			<li v-for="(entry, index) in service" :key="index">
				<h3>{{ entry.activity }}</h3>
				<p>{{ entry.years }}</p>
			</li>
		</ul>
	</Panel>
</template>

<script setup>
defineProps(['service'])
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
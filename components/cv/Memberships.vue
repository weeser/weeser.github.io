<template>
	<Panel header="Work Experience" toggleable>
		<ul>
			<li v-for="(entry, index) in memberships" :key="index">
				<h3>{{ entry.organization }}</h3>
				<p>{{ entry.years }}</p>
			</li>
		</ul>
	</Panel>
</template>

<script setup>
defineProps(['memberships'])
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
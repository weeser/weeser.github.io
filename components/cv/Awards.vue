<template>
	<Panel header="Work Experience" toggleable>
		<ul>
			<li v-for="(experience, index) in workExperience" :key="index">
				<h3>{{ experience.company }}</h3>
				<p>{{ experience.position }}</p>
			</li>
		</ul>
	</Panel>
</template>

<script setup>
defineProps(['workExperience'])
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
<template>
	<Panel header="Education" toggleable>
		<ul>
			<li v-for="(entry, index) in education" :key="index">
				<h3>{{ entry.degree }}</h3>
				<p>{{ entry.institution }}</p>
				<p>{{ entry.year }}</p>
			</li>
		</ul>
	</Panel>
</template>

<script setup>
defineProps(['education'])
</script>

<style scoped>
h2 {
	font-size: 24px;
	font-weight: bold;
}

h3 {
	font-size: 18px;
	font-weight: bold;
}

p {
	font-size: 16px;
	margin-bottom: 8px;
}
</style>
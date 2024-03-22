<script setup>
import { ref, onMounted } from 'vue';

// Custom Components
import Education from '@/components/cv/Education.vue';
import WorkExperience from '@/components/cv/WorkExperience.vue';

let cv_data_raw = (await import(`../data/cv.json?raw`)).default;
let cv_data_parsed = JSON.parse(cv_data_raw);
const cv_data = ref(cv_data_parsed);
</script>

<template>
	<h2>Curriculum Vitae</h2>
	<Education :education="cv_data.education" />
	<WorkExperience :education="cv_data.workExperience" />
</template>

<style scoped>
/* Your component-specific styles go here */
</style>
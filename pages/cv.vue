<script setup>
import { ref, onMounted } from 'vue';

// Custom Components
import Education from '@/components/cv/Education.vue';
import WorkExperience from '@/components/cv/WorkExperience.vue';
import Awards from '@/components/cv/Awards.vue';
import Memberships from '@/components/cv/Memberships.vue';
import Service from '@/components/cv/Service.vue';
import Teaching from '@/components/cv/Teaching.vue';

let cv_data_raw = (await import(`../data/cv.json?raw`)).default;
let cv_data_parsed = JSON.parse(cv_data_raw);
const cv_data = ref(cv_data_parsed);
</script>

<template>
	<h2>Curriculum Vitae</h2>
	<Education :education="cv_data.education" />
	<WorkExperience :workExperience="cv_data.workExperience" />
	<Teaching :coursesTaught="cv_data.coursesTaught" />
	<Service :service="cv_data.professionalService" serviceHeader="Professional Service"/>
	<Service :service="cv_data.universityService" serviceHeader="University Service"/>
	<Memberships :memberships="cv_data.memberships" />
	<Awards :awards="cv_data.awards" />
</template>

<style scoped>
p {
	font-size: 16px;
	margin-bottom: 8px;
}
</style>
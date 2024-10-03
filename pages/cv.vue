<script setup>
import { ref, onMounted } from 'vue';

// Custom Components
import Education from '@/components/cv/Education.vue';
import WorkExperience from '@/components/cv/WorkExperience.vue';
import Awards from '@/components/cv/Awards.vue';
import Memberships from '@/components/cv/Memberships.vue';
import Service from '@/components/cv/Service.vue';
import Teaching from '@/components/cv/Teaching.vue';
import Grants from '@/components/cv/Grants.vue';
import StudentProjects from '@/components/cv/StudentProjects.vue';
import Publications from './publications.vue';

let cvDataRaw = (await import(`../data/cv.json?raw`)).default;
let ugProjRaw = (await import(`../data/undergraduateProjects.json?raw`)).default;
let cvDataParsed = JSON.parse(cvDataRaw);
let ugProjParsed = JSON.parse(ugProjRaw);
for(let i = 0; i < ugProjParsed.length; i++) {
	ugProjParsed[i].students = ugProjParsed[i].students.join(', ');
}
const cvData = ref(cvDataParsed);
</script>

<template>
	<h2>Curriculum Vitae</h2>
	<Education :education="cvData.education" />
	<WorkExperience :workExperience="cvData.workExperience" />
	<Teaching :coursesTaught="cvData.coursesTaught" />
	<Service :service="cvData.professionalService" serviceHeader="Professional Service" />
	<Service :service="cvData.universityService" serviceHeader="University Service" />
	<Service :service="cvData.publicService" serviceHeader="Public Service" />
	<Memberships :memberships="cvData.memberships" />
	<Awards :awards="cvData.awards" />
	<Grants :grants="cvData.grants" />
	<PrimePanel header="Publications" toggleable>
		<Publications />
	</PrimePanel>
	<StudentProjects :ugProjects="ugProjParsed" />
</template>

<style scoped>
p {
	font-size: 16px;
	margin-bottom: 8px;
}
</style>
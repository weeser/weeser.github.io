<script setup>
import { ref, onMounted } from 'vue';

import Divider from 'primevue/divider';


// Custom Components
import Publications from '@/components/cv/Publications.vue';

let pubs = (await import(`../data/publications.bib?raw`)).default;
let theses = (await import(`../data/advisedTheses.bib?raw`)).default;
</script>

<template>
	<Publications :bibFile="pubs" title="Publications"/>
  <Divider />
	<Publications :bibFile="theses" title="Advised Theses"/>
</template>

<style scoped>
p {
	font-size: 16px;
	margin-bottom: 8px;
}
</style>
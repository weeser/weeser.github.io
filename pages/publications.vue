<script setup>
import { ref, onMounted } from 'vue';

import Divider from 'primevue/divider';


// Custom Components
import Publications from '@/components/cv/Publications.vue';

let pubs = (await import(`../data/publications.bib?raw`)).default;
let talks = (await import(`../data/talksPanelsWorkshops.bib?raw`)).default;
let theses = (await import(`../data/advisedTheses.bib?raw`)).default;
let servedCom = (await import(`../data/gradCommitteesServed.bib?raw`)).default;
</script>

<template>
	<Publications :bibFile="pubs" title="Publications"/>
  <Divider />
	<Publications :bibFile="talks" title="Talks, Panels, and Workshops"/>
  <Divider />
	<Publications :bibFile="theses" title="Dissertations And Theses Completed Under My Supervision"/>
  <Divider />
	<Publications :bibFile="servedCom" title="Served Graduate Committees"/>
</template>

<style scoped>
p {
	font-size: 16px;
	margin-bottom: 8px;
}
</style>
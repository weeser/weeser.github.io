<script setup>
import { ref } from 'vue';

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

const yearRegex = /\b(?:19|20)\d{2}\b/g;

const parseYearSpans = (years) => {
	if (!years) {
		return [];
	}

	const value = String(years).toLowerCase();
	const segments = value.split(',').map((segment) => segment.trim()).filter(Boolean);
	const spans = [];

	for (const segment of segments) {
		const matches = [...segment.matchAll(yearRegex)].map((match) => Number(match[0]));
		if (matches.length === 0) {
			continue;
		}

		const start = Math.min(...matches);
		const end = segment.includes('present') ? Number.POSITIVE_INFINITY : Math.max(...matches);
		spans.push({ start, end });
	}

	return spans;
};

const getYearsSortKey = (years) => {
	const spans = parseYearSpans(years);
	if (spans.length === 0) {
		return {
			latestEnd: Number.NEGATIVE_INFINITY,
			latestStartForLatestEnd: Number.NEGATIVE_INFINITY,
			oldestStart: Number.NEGATIVE_INFINITY,
			spanCount: Number.POSITIVE_INFINITY,
		};
	}

	let latestEnd = Number.NEGATIVE_INFINITY;
	let latestStartForLatestEnd = Number.NEGATIVE_INFINITY;
	let oldestStart = Number.POSITIVE_INFINITY;

	for (const span of spans) {
		if (span.end > latestEnd) {
			latestEnd = span.end;
			latestStartForLatestEnd = span.start;
		} else if (span.end === latestEnd && span.start > latestStartForLatestEnd) {
			latestStartForLatestEnd = span.start;
		}

		if (span.start < oldestStart) {
			oldestStart = span.start;
		}
	}

	return {
		latestEnd,
		latestStartForLatestEnd,
		oldestStart,
		spanCount: spans.length,
	};
};

const sortByYearsDesc = (items) => {
	return [...items].sort((a, b) => {
		const keyA = getYearsSortKey(a.years);
		const keyB = getYearsSortKey(b.years);

		if (keyB.latestEnd !== keyA.latestEnd) {
			return keyB.latestEnd - keyA.latestEnd;
		}

		if (keyB.latestStartForLatestEnd !== keyA.latestStartForLatestEnd) {
			return keyB.latestStartForLatestEnd - keyA.latestStartForLatestEnd;
		}

		if (keyB.oldestStart !== keyA.oldestStart) {
			return keyB.oldestStart - keyA.oldestStart;
		}

		if (keyA.spanCount !== keyB.spanCount) {
			return keyA.spanCount - keyB.spanCount;
		}

		return 0;
	});
};

const sortCvListsByYears = (data) => {
	const sorted = {};
	for (const [key, value] of Object.entries(data)) {
		if (Array.isArray(value) && value.some((item) => item && typeof item === 'object' && 'years' in item)) {
			sorted[key] = sortByYearsDesc(value);
		} else {
			sorted[key] = value;
		}
	}

	return sorted;
};

cvDataParsed = sortCvListsByYears(cvDataParsed);
for (let i = 0; i < ugProjParsed.length; i++) {
	ugProjParsed[i].students = ugProjParsed[i].students.join(', ');
}

const tocItems = [
	{ id: 'education', label: 'Education' },
	{ id: 'work-experience', label: 'Work Experience' },
	{ id: 'teaching', label: 'Teaching' },
	{ id: 'professional-service', label: 'Professional Service' },
	{ id: 'university-service', label: 'University Service' },
	{ id: 'public-service', label: 'Public Service' },
	{ id: 'memberships', label: 'Memberships' },
	{ id: 'awards', label: 'Awards' },
	{ id: 'grants', label: 'Grants' },
	{ id: 'publications', label: 'Publications' },
	{ id: 'student-projects', label: 'Student Projects' },
];

const cvData = ref(cvDataParsed);
</script>

<template>
	<h2 class="section-title mb-6">Curriculum Vitae</h2>

	<PrimeCard class="mb-6 border-0">
		<template #title>Table of Contents</template>
		<template #content>
			<ol class="grid grid-flow-col grid-rows-6 gap-2 text-sm" style="list-style: none; counter-reset: toc-counter;">
				<li v-for="item in tocItems" :key="item.id" style="counter-increment: toc-counter;">
					<a :href="`#${item.id}`" class="font-medium text-[color:var(--site-accent)] hover:underline">
						<span class="mr-1 font-semibold text-[color:var(--site-ink-muted)]" style="font-variant-numeric: tabular-nums;">{{ tocItems.indexOf(item) + 1 }}.</span>{{ item.label }}
					</a>
				</li>
			</ol>
		</template>
	</PrimeCard>

	<Education id="education" class="scroll-mt-28" :education="cvData.education" />
	<WorkExperience id="work-experience" class="scroll-mt-28" :workExperience="cvData.workExperience" />
	<Teaching id="teaching" class="scroll-mt-28" :coursesTaught="cvData.coursesTaught" />
	<Service id="professional-service" class="scroll-mt-28" :service="cvData.professionalService" serviceHeader="Professional Service" />
	<Service id="university-service" class="scroll-mt-28" :service="cvData.universityService" serviceHeader="University Service" />
	<Service id="public-service" class="scroll-mt-28" :service="cvData.publicService" serviceHeader="Public Service" />
	<Memberships id="memberships" class="scroll-mt-28" :memberships="cvData.memberships" />
	<Awards id="awards" class="scroll-mt-28" :awards="cvData.awards" />
	<Grants id="grants" class="scroll-mt-28" :grants="cvData.grants" />
	<div id="publications" class="scroll-mt-28">
		<PrimePanel header="Publications" toggleable>
			<Publications />
		</PrimePanel>
	</div>
	<StudentProjects id="student-projects" class="scroll-mt-28" :ugProjects="ugProjParsed" />
	<PrimeScrollTop />
</template>

<style scoped>
p {
	font-size: 16px;
	margin-bottom: 8px;
}
</style>
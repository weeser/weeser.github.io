<template>
  <!-- Hero -->
  <section class="flex flex-col md:flex-row items-center gap-8 my-10">
    <PrimeImage src="/images/head-shot.png" alt="Josh Weese's Portrait" imageClass="rounded-full w-40 h-40 object-cover shadow-lg" />
    <div>
      <h1 class="text-4xl font-bold text-surface-900 dark:text-surface-0">Joshua L. Weese</h1>
      <p class="text-xl text-surface-600 dark:text-surface-300 mt-1">Teaching Associate Professor &mdash; Kansas State University, Department of Computer Science</p>
      <p class="mt-3 max-w-2xl text-surface-700 dark:text-surface-200">
        My research focuses on computer science education, computational thinking for K-12, and expanding computing education access in rural and underserved communities. I co-direct the
        <a href="https://alt.cs.ksu.edu/" target="_blank" class="text-primary-700 dark:text-primary-emphasis hover:underline">ALT-CS Lab</a>
        and work on several funded projects training K-12 teachers in computer science education and development of educational tools/curricula.
      </p>
      <div class="flex flex-wrap gap-2 mt-4">
        <NuxtLink to="/publications"><PrimeButton label="Publications" icon="pi pi-book" size="small" /></NuxtLink>
        <NuxtLink to="/cv"><PrimeButton label="CV" icon="pi pi-file" size="small" severity="secondary" /></NuxtLink>
        <NuxtLink to="/about"><PrimeButton label="About" icon="pi pi-user" size="small" severity="secondary" /></NuxtLink>
        <NuxtLink to="/contact"><PrimeButton label="Contact" icon="pi pi-envelope" size="small" severity="secondary" /></NuxtLink>
      </div>
    </div>
  </section>

  <PrimeDivider />

  <!-- Research Interests -->
  <section class="my-8">
    <h2 class="text-2xl font-semibold text-surface-900 dark:text-surface-0 mb-4">Research Interests</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <PrimeCard>
        <template #title><span class="flex items-center gap-2"><i class="pi pi-graduation-cap text-primary-600" /> CS Education</span></template>
        <template #content>Creating and evaluating curriculum and assessments for computational thinking at the K-12 level, with an emphasis on rural  learners.</template>
      </PrimeCard>
      <PrimeCard>
        <template #title><span class="flex items-center gap-2"><i class="pi pi-users text-primary-600" /> Teacher Training</span></template>
        <template #content>Training in-service and pre-service teachers to teach computer science through the Kansas Cyber Pipeline and other programs.</template>
      </PrimeCard>
      <PrimeCard>
        <template #title><span class="flex items-center gap-2"><i class="pi pi-chart-bar text-primary-600" /> Data Science &amp; Tools</span></template>
        <template #content>Developing data analytics platforms for education research, including the Data Explorer portal hosted by PhysPort/AAPT.</template>
      </PrimeCard>
    </div>
  </section>

  <PrimeDivider />

  <!-- Research Keywords -->
  <section class="my-8">
    <h2 class="text-2xl font-semibold text-surface-900 dark:text-surface-0 mb-3">Keywords</h2>
    <div class="flex flex-wrap gap-2">
      <PrimeChip v-for="kw in keywords" :key="kw" :label="kw" />
    </div>
  </section>
</template>

<script setup>
const keywords = [
  'Computer Science Education',
  'Computational Thinking',
  'PK–12 Outreach',
  'Broadening Participation',
  'Self-Efficacy',
  'Teacher Education',
  'Standards & Assessment',
  'Data Science',
  'Software Engineering',
];
</script>

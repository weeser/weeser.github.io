<script setup>
definePageMeta({ hideHeader: true })

const keywords = [
  'Computer Science Education',
  'Computational Thinking',
  'PK-12 Outreach',
  'Broadening Participation',
  'Self-Efficacy',
  'Teacher Education',
  'Standards & Assessment',
  'Data Science',
  'Software Engineering',
];
</script>

<template>
  <!-- Hero -->
  <section class="surface-panel my-8 flex flex-col items-center gap-8 p-6 md:flex-row md:p-10">
    <PrimeImage src="/images/head-shot.png" alt="Josh Weese's Portrait" imageClass="h-44 w-44 rounded-3xl object-cover shadow-xl ring-4 ring-[color:var(--site-surface-strong)]" />
    <div>
      <h1 class="section-title">Joshua L. Weese</h1>
      <p class="mt-2 text-lg font-medium text-[color:var(--site-ink-muted)] md:text-xl">Teaching Associate Professor &mdash; Kansas State University, Department of Computer Science</p>
      <p class="mt-4 max-w-2xl">
        My research focuses on computer science education, computational thinking for K-12, and expanding computing education access in rural and underserved communities. I co-direct the
        <a href="https://alt.cs.ksu.edu/" target="_blank" class="font-semibold hover:underline">ALT-CS Lab</a>
        and work on several funded projects training K-12 teachers in computer science education and development of educational tools/curricula.
      </p>
      <div class="mt-5 flex flex-wrap gap-3">
        <NuxtLink to="/publications"><PrimeButton label="Publications" icon="pi pi-book" rounded /></NuxtLink>
        <NuxtLink to="/cv"><PrimeButton label="CV" icon="pi pi-file" severity="secondary" rounded /></NuxtLink>
        <NuxtLink to="/about"><PrimeButton label="About" icon="pi pi-user" severity="secondary" rounded /></NuxtLink>
        <NuxtLink to="/contact"><PrimeButton label="Contact" icon="pi pi-envelope" severity="contrast" rounded /></NuxtLink>
      </div>
    </div>
  </section>

  <PrimeDivider class="before:border-emerald-800/20 after:border-emerald-800/20" />

  <!-- Research Interests -->
  <section class="my-10 space-y-5">
    <h2 class="text-3xl font-semibold">Research Interests</h2>
    <div class="grid grid-cols-1 gap-5 md:grid-cols-3">
      <PrimeCard class="surface-panel border-0">
        <template #title><span class="flex items-center gap-2"><i class="pi pi-graduation-cap text-primary-600" /> CS Education</span></template>
        <template #content>Creating and evaluating curriculum and assessments for computational thinking at the K-12 level, with an emphasis on rural  learners.</template>
      </PrimeCard>
      <PrimeCard class="surface-panel border-0">
        <template #title><span class="flex items-center gap-2"><i class="pi pi-users text-primary-600" /> Teacher Training</span></template>
        <template #content>Training in-service and pre-service teachers to teach computer science through the Kansas Cyber Pipeline and other programs.</template>
      </PrimeCard>
      <PrimeCard class="surface-panel border-0">
        <template #title><span class="flex items-center gap-2"><i class="pi pi-chart-bar text-primary-600" /> Data Science &amp; Tools</span></template>
        <template #content>Developing data analytics platforms for education research, including the Data Explorer portal hosted by PhysPort/AAPT.</template>
      </PrimeCard>
    </div>
  </section>

  <PrimeDivider class="before:border-emerald-800/20 after:border-emerald-800/20" />

  <!-- Research Keywords -->
  <section class="my-10">
    <h2 class="text-3xl font-semibold">Keywords</h2>
    <div class="mt-4 flex flex-wrap gap-2">
      <PrimeChip v-for="kw in keywords" :key="kw" :label="kw" class="border border-[color:var(--site-border)] bg-[color:var(--site-highlight)] text-[color:var(--site-ink)]" />
    </div>
  </section>
</template>
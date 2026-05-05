<script setup lang="ts">
const contactCard = ref<HTMLElement>()
const calendlyOptions = { url: 'https://calendly.com/weeser/', text: 'Schedule a Meeting' }

const form = ref({ name: '', email: '', subject: '', message: '' })
const submitted = ref(false)

const handleSubmit = () => {
  // Opens the user's default email client with pre-filled fields
  const mailto = `mailto:weeser@ksu.edu?subject=${encodeURIComponent(form.value.subject)}&body=${encodeURIComponent(`From: ${form.value.name} <${form.value.email}>\n\n${form.value.message}`)}`
  window.location.href = mailto
  submitted.value = true
}
</script>

<template>
  <section ref="contactCard" class="space-y-8">
    <h1 class="section-title">Contact</h1>

    <!-- Info + Schedule row -->
    <div class="grid gap-6 md:grid-cols-2">

      <!-- Contact details card -->
      <PrimeCard class="surface-panel border-0">
        <template #title>
          <span class="flex items-center gap-2">
            <i class="pi pi-id-card text-[color:var(--site-accent)]" />
            Contact Information
          </span>
        </template>
        <template #content>
          <ul class="space-y-3 text-sm">
            <li class="flex items-start gap-3">
              <i class="pi pi-user mt-0.5 text-[color:var(--site-accent)]" />
              <span><strong>Dr. Josh Weese</strong><br />Teaching Associate Professor<br />Department of Computer Science<br />Kansas State University</span>
            </li>
            <li class="flex items-center gap-3">
              <i class="pi pi-map-marker text-[color:var(--site-accent)]" />
              <span>2214 Engineering Hall, 1701D Platt St.<br />Manhattan, KS 66502</span>
            </li>
            <li class="flex items-center gap-3">
              <i class="pi pi-envelope text-[color:var(--site-accent)]" />
              <a href="mailto:weeser@ksu.edu" class="hover:underline">weeser@ksu.edu</a>
            </li>
            <li class="flex items-center gap-3">
              <i class="pi pi-phone text-[color:var(--site-accent)]" />
              <a href="tel:7855327929" class="hover:underline">785-532-7929</a>
            </li>
          </ul>
        </template>
      </PrimeCard>

      <!-- Office hours / schedule card -->
      <PrimeCard class="surface-panel border-0">
        <template #title>
          <span class="flex items-center gap-2">
            <i class="pi pi-calendar text-[color:var(--site-accent)]" />
            Scheduling
          </span>
        </template>
        <template #content>
          <p class="text-sm">For office hours and availability, view the calendar or book a time directly.</p>
          <div class="mt-4 flex flex-wrap gap-3">
            <NuxtLink to="/calendar">
              <PrimeButton label="View Calendar" icon="pi pi-calendar" severity="secondary" rounded />
            </NuxtLink>
            <CalendlyPopupButton v-bind="calendlyOptions" :root-element="contactCard" class="p-button p-button-rounded" />
          </div>
        </template>
        <template #footer>
          <div class="flex flex-wrap gap-2 border-t border-[color:var(--site-border)] pt-4">
            <a href="https://www.linkedin.com/in/josh-weese-365b9755" target="_blank" aria-label="LinkedIn">
              <PrimeButton icon="pi pi-linkedin" rounded text aria-label="LinkedIn" v-tooltip="'LinkedIn'" />
            </a>
            <a href="https://github.com/weeser" target="_blank" aria-label="GitHub">
              <PrimeButton icon="pi pi-github" rounded text aria-label="GitHub" v-tooltip="'GitHub'" />
            </a>
            <a href="https://scholar.google.com/citations?user=weeser" target="_blank" aria-label="Google Scholar">
              <PrimeButton icon="pi pi-graduation-cap" rounded text aria-label="Google Scholar" v-tooltip="'Google Scholar'" />
            </a>
          </div>
        </template>
      </PrimeCard>
    </div>

    <PrimeDivider />

    <!-- Message form -->
    <PrimeCard class="surface-panel border-0">
      <template #title>
        <span class="flex items-center gap-2">
          <i class="pi pi-send text-[color:var(--site-accent)]" />
          Send a Message
        </span>
      </template>
      <template #content>
        <PrimeMessage v-if="submitted" severity="success" class="mb-4">
          Your email client has been opened with your message pre-filled. Send it from there to complete.
        </PrimeMessage>
        <form class="grid gap-4 md:grid-cols-2" @submit.prevent="handleSubmit">
          <div class="flex flex-col gap-1">
            <label class="text-sm font-medium" for="contact-name">Name</label>
            <PrimeInputText id="contact-name" v-model="form.name" placeholder="Your name" required />
          </div>
          <div class="flex flex-col gap-1">
            <label class="text-sm font-medium" for="contact-email">Email</label>
            <PrimeInputText id="contact-email" v-model="form.email" type="email" placeholder="your@email.com" required />
          </div>
          <div class="flex flex-col gap-1 md:col-span-2">
            <label class="text-sm font-medium" for="contact-subject">Subject</label>
            <PrimeInputText id="contact-subject" v-model="form.subject" placeholder="What is this regarding?" required />
          </div>
          <div class="flex flex-col gap-1 md:col-span-2">
            <label class="text-sm font-medium" for="contact-message">Message</label>
            <PrimeTextarea id="contact-message" v-model="form.message" rows="5" placeholder="Your message..." required auto-resize />
          </div>
          <div class="md:col-span-2">
            <PrimeButton type="submit" label="Open in Email Client" icon="pi pi-envelope" rounded />
          </div>
        </form>
      </template>
    </PrimeCard>
  </section>
</template>

<style scoped></style>

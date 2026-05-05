<script setup>
// Libraries
import { ref } from 'vue'
import { useRoute } from '#imports'

// Custom Components
import ThemeToggle from '@/components/menu/ToggleTheme.vue'

const route = useRoute()

// Menu items
const items = ref([
  {
    label: 'Home',
    icon: 'pi pi-home m-1',
    route: '/'
  },
  {
    label: 'Publications',
    icon: 'pi pi-book m-1',
    route: '/publications'
  },
  {
    label: 'CV',
    icon: 'pi pi-id-card m-1',
    route: '/cv'
  },
  {
    label: 'Calendar',
    icon: 'pi pi-calendar m-1',
    route: '/calendar'
  },
  {
    label: 'About',
    icon: 'pi pi-info',
    route: '/about'
  },
  {
    label: 'Contact',
    icon: 'pi pi-envelope m-1',
    route: '/contact'
  }
])

</script>

<template>
  <PrimeMenubar :model="items" class="border-none bg-transparent">
    <template #start>
    </template>
    <template #item="{ item, props, hasSubmenu, root }">
      <NuxtLink
        :to="item.route"
        class="inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold transition-colors duration-200"
        :class="route.path === item.route ? 'bg-[color:var(--site-highlight)] text-[color:var(--site-ink)]' : 'text-[color:var(--site-ink-muted)] hover:bg-[color:var(--site-bg-soft)] hover:text-[color:var(--site-ink)]'"
      >
        <span v-if="item.icon" :class="item.icon" />
        <span>{{ item.label }}</span>
      </NuxtLink>
    </template>
    <template #end>
      <div class="flex items-center gap-2 rounded-full border border-[color:var(--site-border)] bg-[color:var(--site-surface-strong)] px-2 py-1">
        <ThemeToggle />
      </div>
    </template>
  </PrimeMenubar>
</template>

<style scoped></style>
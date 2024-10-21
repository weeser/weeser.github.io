<script setup>
// Libraries
import { ref } from 'vue'

// Custom Components
import ThemeToggle from '@/components/menu/ToggleTheme.vue'

// Menu items
const items = ref([
  {
    label: 'Home',
    icon: 'pi pi-home',
    url: '/'
  },
  {
    label: 'Publications',
    icon: 'pi pi-book',
    url: '/publications'
  },
  {
    label: 'CV',
    icon: 'pi pi-id-card',
    url: '/cv'
  },
  {
    label: 'Calendar',
    icon: 'pi pi-calendar',
    url: '/calendar'
  },
  {
    label: 'About',
    icon: 'pi pi-info',
    url: '/about'
  },
  {
    label: 'Contact',
    icon: 'pi pi-envelope',
    url: '/contact'
  }
])

</script>

<template>
  <PrimeMenubar :model="items">
    <template #start>
    </template>
    <template #item="{ item, props, hasSubmenu, root }">
      <NuxtLink :to="item.route">
        <span v-if="item.icon" :class="item.icon" />
        <span>{{ item.label }}</span>
      </NuxtLink>
    </template>
    <template #end>
      <div class="flex items-center gap-2">
        <ThemeToggle />
      </div>
    </template>
  </PrimeMenubar>
</template>

<style scoped></style>
<script setup>
// Libraries
import { ref } from 'vue'

// Custom Components
import ThemeToggle from '@/components/menu/ToggleTheme.vue'

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
  <PrimeMenubar :model="items">
    <template #start>
    </template>
    <template #item="{ item, props, hasSubmenu, root }">
      <NuxtLink :to="item.route" class="font-bold">
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
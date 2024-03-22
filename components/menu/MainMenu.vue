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
	<Menubar :model="items">
		<template #start>
		</template>
		<template #end>
			<div class="flex align-items-center gap-2">
				<ThemeToggle />
			</div>
		</template>
	</Menubar>
</template>

<style scoped></style>
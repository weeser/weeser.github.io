<script setup>
// https://dev.to/tqbit/create-your-own-dark-mode-toggle-component-with-vue-js-1284
// https://primevue.org/theming/#switchthemes

// Libraries
import { usePrimeVue } from 'primevue/config'
const PrimeVue = usePrimeVue()


/**
 * Toggle theme value and trigger update
 */
const toggleColorScheme = () => {
	document.body.classList.toggle("my-app-dark");
}

</script>

<template>
	<div class="p-menuitem">
		<div class="p-menuitem-content">
			<a class="p-menuitem-link" @click="toggleColorScheme()">
				<span v-if="themeDark == 'light-theme'" class="pi pi-moon" v-tooltip.bottom="'Toggle Dark Mode'" />
				<span v-else class="pi pi-sun" v-tooltip.bottom="'Toggle Light Mode'" />
			</a>
		</div>
	</div>
</template>

<style scoped></style>
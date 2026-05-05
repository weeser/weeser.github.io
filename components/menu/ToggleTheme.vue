<script setup>
// https://dev.to/tqbit/create-your-own-dark-mode-toggle-component-with-vue-js-1284
// https://primevue.org/theming/#switchthemes

// Libraries
import { onMounted, ref } from 'vue';

const darkClass = 'dark'
const checked = ref(false);
const getTheme = () => {
	return localStorage.getItem('user-theme')
}

onMounted(() => {
	const initUserTheme = getTheme() || getMediaPreference();
	setTheme(initUserTheme);
});

const getMediaPreference = () => {
	const hasDarkPreference = window.matchMedia(
		"(prefers-color-scheme: dark)"
	).matches;
	if (hasDarkPreference) {
		return "dark-theme";
	} else {
		return "light-theme";
	}
}


const setTheme = (theme) => {
	const isDark = theme === 'dark-theme';
	localStorage.setItem('user-theme', theme);
	document.documentElement.classList.toggle(darkClass, isDark);
	checked.value = isDark;
}

/**
 * Toggle theme value and trigger update
 */
const toggleColorScheme = (value) => {
	const nextTheme = value ? 'dark-theme' : 'light-theme';
	setTheme(nextTheme);
}

</script>

<template>
	<div class="p-menuitem">
		<PrimeToggleButton
			v-model="checked"
			@update:modelValue="toggleColorScheme"
			onIcon="pi pi-moon"
			onLabel="Dark"
			offLabel="Light"
			offIcon="pi pi-sun"
			class="w-28"
			aria-label="Toggle Dark Mode"
			v-tooltip.bottom="'Toggle Dark Mode'"
		/>
	</div>
</template>

<style scoped>
:deep(.p-togglebutton) {
	border-radius: 9999px !important;
	background: var(--site-surface-strong) !important;
	border: 1px solid var(--site-border) !important;
}

:deep(.p-togglebutton .p-button-label) {
	font-size: 0.75rem;
}
</style>
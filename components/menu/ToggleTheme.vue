<script setup>
// https://dev.to/tqbit/create-your-own-dark-mode-toggle-component-with-vue-js-1284
// https://primevue.org/theming/#switchthemes

// Libraries
import { onMounted, ref } from 'vue';

const darkClass = 'my-app-dark'
const checked = ref(false);
const currentTheme = ref(null);
const getTheme = () => {
	return localStorage.getItem('user-theme')
}

onMounted(() => {
	let initUserTheme = getTheme() || getMediaPreference();
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
	localStorage.setItem("user-theme", theme);
	currentTheme.value = theme;
	if (theme === "dark-theme") {
		document.documentElement.classList.add(darkClass);
	} else {
		document.documentElement.classList.remove(darkClass);
	}
}

/**
 * Toggle theme value and trigger update
 */
const toggleColorScheme = () => {
	// if (theme === "dark-theme") {
	// 	document.documentElement.classList.add(darkClass);
	// } else {
	// 	document.documentElement.classList.remove(darkClass);
	// }
	const element = document.querySelector('html');
	element.classList.toggle(darkClass);
}

</script>

<template>
	<div class="p-menuitem">
		<PrimeToggleButton v-model="checked" @change="toggleColorScheme" onIcon="pi pi-moon" onLabel=" " offLabel=" "
			offIcon="pi pi-sun" class="w-36" aria-label="Toggle Dark Mode" v-tooltip.bottom="'Toggle Dark Mode'" />

	</div>
</template>

<style scoped></style>
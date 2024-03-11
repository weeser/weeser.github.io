<script setup>
	// Custom Components
	import TopMenu from '@/components/menu/MainMenu.vue'
</script>
<template>
	<div>
		<AppHeader />
		<nav>
			<!-- Navigation Menu-->
			<TopMenu />
		</nav>
		<slot />
		<AppFooter />
	</div>
</template>
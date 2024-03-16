<script setup>
	// Custom Components
	import TopMenu from '@/components/menu/MainMenu.vue'
  import AppHeader from '@/components/AppHeader.vue'
  import AppFooter from '@/components/AppFooter.vue'
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
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
    <!-- Main Content -->
    <div class="py-1 lg:px-8 md:px-6 sm:px-4">
      <slot />
    </div>
		<AppFooter />
	</div>
</template>
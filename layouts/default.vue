<script setup>
	// Custom Components
	import TopMenu from '@/components/menu/MainMenu.vue'
  import AppHeader from '@/components/AppHeader.vue'
  import AppFooter from '@/components/AppFooter.vue'

const route = useRoute()
</script>
<template>
	<div class="relative overflow-x-clip">
		<div class="pointer-events-none absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-200/35 blur-3xl" />
		<div class="pointer-events-none absolute top-96 -right-20 h-64 w-64 rounded-full bg-teal-200/35 blur-3xl" />
		<AppHeader v-if="!route.meta?.hideHeader" />

		<nav class="sticky top-0 z-30 border-y border-[color:var(--site-border)] bg-[color:var(--site-surface)] backdrop-blur-md">
			<!-- Navigation Menu-->
			<div class="mx-auto max-w-6xl px-3 sm:px-6 lg:px-8">
				<TopMenu />
			</div>
			<!-- 
			<div class="bg-yellow-200 px-4 py-1 text-xs text-black">
				DEBUG — route.name: {{ route.name }} | route.meta: {{ JSON.stringify(route.meta) }}
			</div>
			 -->
		</nav>
    <!-- Main Content -->
		<main class="relative z-10 mx-auto w-full max-w-6xl px-3 py-8 sm:px-6 lg:px-8 lg:py-12">
			<slot />
		</main>
		<AppFooter />
	</div>
</template>
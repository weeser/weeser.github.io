<script setup>
const title = 'Josh Weese'
const subtitle = 'Computer Science Education | Kansas State University'
</script>

<template>
	<header class="border-b border-[color:var(--site-border)] bg-[color:var(--site-surface)] backdrop-blur-md">
		<div class="mx-auto flex max-w-6xl flex-col gap-4 px-3 py-6 sm:px-6 lg:px-8">
				<div>
				<h1 class="text-3xl font-semibold leading-tight md:text-4xl">{{ title }}</h1>
				<p class="mt-2 text-sm font-medium text-[color:var(--site-ink-muted)] md:text-base">{{ subtitle }}</p>
			</div>
		</div>
	</header>
</template>




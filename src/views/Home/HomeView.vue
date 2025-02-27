<template>
	<h2>{{ $t(`home.title`) }}</h2>
	<section>
		<p>{{ $d(new Date().getTime(), 'long') }}</p>
		<button @click="appStore.changeLocale">Language: {{ appStore.getLocale }}</button>
	</section>
</template>

<script setup lang="ts">
	import { ref } from 'vue';
	import { useAppStore } from '@/stores/appStore';

	const appStore = useAppStore();
</script>

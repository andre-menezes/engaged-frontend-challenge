<template>
	<span class="material-symbols-rounded">{{ icon }}</span>
</template>

<script setup lang="ts">
	const { icon } = defineProps(['icon']);
</script>

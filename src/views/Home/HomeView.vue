<template>
	<h2>{{ $t(`home.title`) }}</h2>
	<section>
		<p>{{ $d(new Date().getTime(), 'long') }}</p>
		<button @click="toggleLanguage">Language: {{ locale }}</button>
	</section>
</template>

<script setup lang="ts">
import { i18n } from '@/config/plugins/i18n';
import { ref } from 'vue';

const locale = ref(i18n.global.locale);

function toggleLanguage() {
	const newLanguage = i18n.global.locale === 'en' ? 'pt' : 'en';
	i18n.global.locale = newLanguage;
	locale.value = newLanguage;
}
</script>

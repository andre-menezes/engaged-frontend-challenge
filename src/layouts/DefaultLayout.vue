<template>
	<v-layout app>
		<v-app-bar app class="bg-secondary" :title="$t(`home.title`)">
			<!-- <h1 class="mx-auto">Vue 3 + TypeScript</h1> -->
			<v-btn @click="appStore.changeLocale" variant="plain" color="success" text="OI" class="mx-auto"></v-btn>
		</v-app-bar>
		<v-main app class="my-8 bg-grey-lighten-2" min-height="95vh">
			<slot></slot>
		</v-main>
		<v-footer app class="w-100 bg-secondary justify-center">
				&copy; {{ new Date().getFullYear() }} | {{ $t(`footer.developedBy`, { name: 'André Menezes' }) }}
				{{ $t(`footer.rights`) }}
		</v-footer>
	</v-layout app>
</template>

<script setup lang="ts">
import { useAppStore } from '@/stores';

const appStore = useAppStore();
</script>

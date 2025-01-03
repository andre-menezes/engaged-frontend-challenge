<template>
  <h2>{{ $t(`notFound.title`) }}</h2>
  <button @click="goBack">{{ $t(`action.back`) }}</button>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

function goBack() {
  router.back();
}
</script>
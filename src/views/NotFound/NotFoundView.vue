<template>
  <h1>404 - Page Not Found</h1>
  <button @click="goBack">back</button>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

function goBack() {
  router.back();
}
</script>
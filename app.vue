<template>
  <AppHeader />
  <main class="m-4">
    <AppGenerator :config="generatorConfig()" />
  </main>
</template>

<script setup lang="ts">
import './style.css';
import generatorConfig from './entities/generatorConfig';

// todo: add hint, copy btn, update visual, refactor fs
</script>

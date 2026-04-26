<template>
  <div class="step-item">
    <div class="step-circle-wrapper">
      <div class="step-halo">
        <div class="step-circle">{{ number }}</div>
      </div>
    </div>
    <p class="step-title">{{ title }}</p>
    <p class="step-desc">{{ step }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  number: string;
  title: string;
  step: string;
}>();
</script>

<style src="@/styles/components/steps.css" scoped></style>

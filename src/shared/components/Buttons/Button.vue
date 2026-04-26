<template>
  <button
    :class="['btn-base', sizeClass, variantClass]"
    @click="$emit('click')"
  >
    <slot>{{ title }}</slot>
    <span v-if="arrow" class="btn-arrow">→</span>
  </button>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  title?: string;
  size?: "sm" | "md" | "lg";
  variant?: "solid" | "ghost" | "gradient";
  arrow?: boolean;
}>();

defineEmits(["click"]);

const sizeClass = computed(() => `btn-${props.size ?? "md"}`);
const variantClass = computed(() => `btn-${props.variant ?? "solid"}`);
</script>

<style src="@/styles/components/button.css" scoped></style>

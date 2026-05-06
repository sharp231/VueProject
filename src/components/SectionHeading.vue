<script setup>
defineProps({
  label: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: "",
  },
  variant: {
    type: String,
    default: "default",
  },
});
</script>

<template>
  <div class="section-heading" :class="`section-heading--${variant}`" v-reveal>
    <p class="eyebrow">{{ label }}</p>
    <h2>{{ title }}</h2>
    <p v-if="description" class="section-description">{{ description }}</p>
  </div>
</template>

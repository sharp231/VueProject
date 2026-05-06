<script setup>
import SectionHeading from "./SectionHeading.vue";

defineProps({
  about: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <section :id="about.id" class="content-section about-section">
    <SectionHeading :label="about.label" :title="about.title" />

    <div class="about-grid">
      <img class="avatar-image" :src="about.image" :alt="about.imageAlt" v-reveal />
      <p v-reveal>{{ about.description }}</p>
    </div>
  </section>
</template>

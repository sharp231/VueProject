<script setup>
import SectionHeading from "./SectionHeading.vue";

defineProps({
  contact: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <section :id="contact.id" class="content-section contact-section">
    <div class="contact-panel" v-reveal>
      <SectionHeading
        :label="contact.label"
        :title="contact.title"
        :description="contact.description"
        variant="inverse"
      />
      <a
        class="primary-button"
        :href="contact.formUrl"
        target="_blank"
        rel="noopener noreferrer"
      >
        {{ contact.buttonLabel }}
      </a>
      <small class="contact-note">{{ contact.note }}</small>
    </div>
  </section>
</template>

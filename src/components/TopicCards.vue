<script setup>
import SectionHeading from "./SectionHeading.vue";

defineProps({
  topics: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <section :id="topics.id" class="content-section">
    <SectionHeading :label="topics.label" :title="topics.title" />

    <div class="card-grid">
      <article v-for="topic in topics.items" :key="topic.title" class="topic-card" v-reveal>
        <div class="topic-thumb">
          <img :src="topic.image" :alt="topic.imageAlt" />
        </div>
        <div class="card-body">
          <h3>{{ topic.title }}</h3>
          <p>{{ topic.description }}</p>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
defineProps({
  hero: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["navigate"]);
</script>

<template>
  <section
    :id="hero.id"
    class="hero-section"
    :style="{ backgroundImage: `linear-gradient(90deg, rgba(15, 23, 42, 0.78), rgba(15, 23, 42, 0.24)), url(${hero.backgroundImage})` }"
  >
    <div class="hero-copy" v-reveal>
      <p class="eyebrow">{{ hero.id }}</p>
      <h1>{{ hero.title }}</h1>
      <p class="hero-lead">{{ hero.lead }}</p>
      <button type="button" class="primary-button" @click="emit('navigate', hero.primaryTarget)">
        {{ hero.primaryAction }}
      </button>
    </div>
  </section>
</template>

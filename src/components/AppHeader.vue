<script setup>
defineProps({
  siteName: {
    type: String,
    required: true,
  },
  links: {
    type: Array,
    required: true,
  },
  activeSectionId: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["navigate"]);
</script>

<template>
  <header class="site-header">
    <nav class="site-nav" aria-label="メインナビゲーション">
      <a class="site-logo" href="#home" @click.prevent="emit('navigate', 'home')">
        {{ siteName }}
      </a>

      <ul class="nav-list">
        <li v-for="link in links" :key="link.target">
          <a
            :href="`#${link.target}`"
            :class="{ 'is-active': activeSectionId === link.target }"
            @click.prevent="emit('navigate', link.target)"
          >
            {{ link.label }}
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

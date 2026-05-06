<script setup>
defineProps({
  copyright: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["back-to-top"]);
</script>

<template>
  <footer class="site-footer">
    <button type="button" class="text-button" @click="emit('back-to-top')">TOP</button>
    <small>{{ copyright }}</small>
  </footer>
</template>

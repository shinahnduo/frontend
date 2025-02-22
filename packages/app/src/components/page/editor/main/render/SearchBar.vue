<!-- filepath: /c:/aiProject/betterwrite/packages/app/src/components/SearchBar.vue -->
<template>
  <div class="search-bar">
    <input
      type="text"
      v-model="query"
      @input="onInput"
      placeholder="Search posts..."
    />
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits } from 'vue'

const query = ref('')
const emit = defineEmits(['search'])

const onInput = () => {
  emit('search', query.value)
}
</script>

<style scoped>
.search-bar {
  margin-bottom: 1rem;
}

.search-bar input {
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
}
</style>
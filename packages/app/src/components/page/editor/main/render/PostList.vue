<!-- filepath: /c:/aiProject/betterwrite/packages/app/src/components/PostList.vue -->
<template>
  <div class="post-list">
    <div v-for="post in posts" :key="post.id" class="post-item">
      <h2>{{ post.title }}</h2>
      <p>{{ post.content }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  posts: {
    type: Array,
    required: true,
  },
})
</script>

<style scoped>
.post-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.post-item {
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
<!-- src/pages/Detail.vue -->
<template>
  <div class="detail-container">
    <button @click="$router.back()">Back</button>
    <img :src="item.image" alt="Item Image" class="detail-image" />
    <h2>{{ item.title }}</h2>
    <p>{{ item.subtitle }}</p>
    <div class="tags">
      <span v-for="tag in item.tags" :key="tag">{{ tag }}</span>
    </div>
    <div class="description">
      <h3>Description</h3>
      <p>{{ item.description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const item = ref({});

onMounted(() => {
  const itemId = route.params.id;
  // Fetch or find the item by ID
  // Example: item.value = fetchItemById(itemId);
});
</script>

<style scoped>
.detail-container {
  padding: 16px;
}

.detail-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.tags {
  display: flex;
  gap: 8px;
}

.description {
  margin-top: 16px;
}
</style>
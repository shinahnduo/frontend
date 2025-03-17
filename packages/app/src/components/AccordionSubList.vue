<template>
  <ul class="sub-list">
    <li v-for="(item, index) in items" :key="index" class="sub-item">
      {{ item }}
      <button @click="removeItem(index)">🗑️</button>
    </li>
    <li class="add-sub-item" @click="addItem">+ 추가</li>
  </ul>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from "vue";

defineProps<{ items: string[] }>();
const emit = defineEmits(["add", "remove"]);

const addItem = () => {
  emit("add");
};

const removeItem = (index: number) => {
  emit("remove", index);
};
</script>

<style scoped>
.sub-list {
  padding: 0;
  list-style: none;
  margin: 0;
}

.sub-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 10px;
  border-bottom: 1px solid #ddd;
}

button {
  background: none;
  border: none;
  cursor: pointer;
}

.add-sub-item {
  padding: 10px;
  color: blue;
  cursor: pointer;
  text-align: left;
}
</style>

<template>
  <ul class="sub-list">
    <li v-for="(item, index) in items" :key="index" class="sub-item">
      <div class="item-content">
        {{ item }}
        <button @click.stop="removeItem(index)">🗑️</button>
      </div>
    </li>
    <li class="add-sub-item" @click="addItem">+ 추가</li>
  </ul>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from "vue";
import { useRouter } from "vue-router";

defineProps<{ items: string[] }>();
const emit = defineEmits(["add", "remove"]);
const router = useRouter();

const addItem = () => {
  emit("add");
};

const removeItem = (index: number) => {
  emit("remove", index);
};

const navigateToRead = (index: number) => {
  router.push(`/read/${index}`);
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
  flex-direction: column;
  gap: 5px;
  padding: 8px 10px;
  border-bottom: 1px solid #ddd;
}
.item-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.read-button {
  width: 100%;
  padding: 6px;
  background: #4a90e2;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
  font-size: 14px;
}
.read-button:hover {
  background: #357abd;
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

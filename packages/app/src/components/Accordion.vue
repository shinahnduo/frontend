<template>
  <div class="accordion">
    <div class="header" @click="toggle">
      <h3>{{ title }}</h3>
      <div class="actions">
        <button @click.stop="onRemove">🗑️</button>
        <span>{{ isOpen ? "▲" : "▼" }}</span>
      </div>
    </div>
    <div v-if="isOpen" class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, defineProps, defineEmits } from "vue";

defineProps<{ title: string }>();
const emit = defineEmits(["remove"]);

const isOpen = ref(false);
const toggle = () => {
  isOpen.value = !isOpen.value;
};

const onRemove = () => {
  emit("remove");
};
</script>

<style scoped>
.accordion {
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 10px;
  overflow: hidden;
}
.header {
  background: #f8f8f8;
  padding: 10px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.actions {
  display: flex;
  gap: 5px;
}
button {
  background: none;
  border: none;
  cursor: pointer;
}
.content {
  padding: 10px;
  background: #fff;
}
</style>

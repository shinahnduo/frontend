<template>
  <div class="accordion">
    <!-- 제목 & 아이콘 -->
    <div class="header">
      <EditableTitle :title="title" @update:title="updateTitle" />
      <div class="actions">
        <button @click.stop="onRemove">🗑️</button>
        <span @click="toggle">{{ isOpen ? '▲' : '▼' }}</span>
      </div>
    </div>

    <!-- 내용 (펼쳐졌을 때만 표시) -->
    <div v-if="isOpen" class="content">
      <slot></slot>

      <!-- 읽기 버튼 (아래에 하나만) -->
      <button class="read-button" @click="navigateToRead">읽기</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, defineProps, defineEmits } from "vue";
import { useRouter } from "vue-router";
import EditableTitle from "@/components/EditableTitle.vue";

const props = defineProps<{ title: string }>();
const emit = defineEmits(["update:title", "remove"]);

const isOpen = ref(false);
const router = useRouter();

const toggle = () => {
  isOpen.value = !isOpen.value;
};

const onRemove = () => {
  emit("remove");
};

// 제목 업데이트
const updateTitle = (newTitle: string) => {
  emit("update:title", newTitle);
};

// 읽기 버튼 클릭 시 이동
const navigateToRead = () => {
  router.push(`/read/1`);
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
.read-button {
  width: 100%;
  padding: 10px;
  background: #4a90e2;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
  font-size: 14px;
  margin-top: 10px;
}
.read-button:hover {
  background: #357abd;
}
</style>

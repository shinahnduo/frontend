<template>
  <div class="editable-title">
    <input
      v-if="isEditing"
      v-model="newTitle"
      class="title-input"
      @keyup.enter="saveTitle"
      @blur="saveTitle"
    />
    <h3 v-else @click="editTitle" class="title-text">{{ newTitle }}</h3>
    <button v-if="isEditing" class="save-button" @click="saveTitle">✔️</button>
  </div>
</template>

<script lang="ts" setup>
import { ref, defineProps, defineEmits, watch } from "vue";

const props = defineProps<{ title: string }>();
const emit = defineEmits(["update:title"]);

const isEditing = ref(false);
const newTitle = ref(props.title);

// 제목 수정 모드 활성화
const editTitle = () => {
  isEditing.value = true;
};

// 제목 저장
const saveTitle = () => {
  isEditing.value = false;
  emit("update:title", newTitle.value);
};

// props 변경 시 동기화
watch(() => props.title, (newVal) => {
  newTitle.value = newVal;
});
</script>

<style scoped>
.editable-title {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-grow: 1; /* 🔥 제목이 가능한 한 넓어지도록 설정 */
  margin-right: 10px;
}

.title-text {
  cursor: pointer;
  flex-grow: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.title-input {
  flex-grow: 1;
  width: 100%; /* 🔥 입력 창이 부모 크기만큼 확장됨 */
  padding: 5px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.save-button {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
}
</style>

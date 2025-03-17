<template>
  <div class="schedule-list">
    <h2>일정</h2>

    <Accordion
      v-for="(category, categoryIndex) in schedules"
      :key="categoryIndex"
      :title="category.title"
      @remove="removeCategory(categoryIndex)"
    >
      <Accordion
        v-for="(chapter, chapterIndex) in category.chapters"
        :key="chapterIndex"
        :title="chapter.title"
        @remove="removeChapter(categoryIndex, chapterIndex)"
      >
        <AccordionSubList
          :items="chapter.subItems"
          @add="addSubItem(categoryIndex, chapterIndex)"
          @remove="removeSubItem(categoryIndex, chapterIndex, $event)"
        />
      </Accordion>
      <button class="add-button" @click="addChapter(categoryIndex)">+ 새로운 챕터 추가</button>
    </Accordion>

    <button class="create-button" @click="addCategory">새로운 일정 생성하기</button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import Accordion from "@/components/Accordion.vue";
import AccordionSubList from "@/components/AccordionSubList.vue";

type SubItem = string;

type Chapter = {
  title: string;
  subItems: SubItem[];
};

type Schedule = {
  title: string;
  chapters: Chapter[];
};

const schedules = ref<Schedule[]>([
  { title: "상하이", chapters: [{ title: "Chapter 1", subItems: ["전망대 관람 (90분)"] }] },
  { title: "뉴욕", chapters: [{ title: "맨해튼 관광", subItems: ["센트럴 파크 산책 (120분)"] }] },
  { title: "파리", chapters: [{ title: "에펠탑 관광", subItems: ["에펠탑 야경 투어 (120분)"] }] },
]);

// 새로운 카테고리 추가
const addCategory = () => {
  schedules.value.push({ title: "새 일정", chapters: [] });
};

// 카테고리 삭제
const removeCategory = (index: number) => {
  schedules.value.splice(index, 1);
};

// 챕터 추가
const addChapter = (categoryIndex: number) => {
  schedules.value[categoryIndex].chapters.push({ title: "새로운 챕터", subItems: [] });
};

// 챕터 삭제
const removeChapter = (categoryIndex: number, chapterIndex: number) => {
  schedules.value[categoryIndex].chapters.splice(chapterIndex, 1);
};

// 서브 리스트(세부 일정) 추가
const addSubItem = (categoryIndex: number, chapterIndex: number) => {
  schedules.value[categoryIndex].chapters[chapterIndex].subItems.push("새로운 일정 항목");
};

// 서브 리스트(세부 일정) 삭제
const removeSubItem = (categoryIndex: number, chapterIndex: number, subIndex: number) => {
  schedules.value[categoryIndex].chapters[chapterIndex].subItems.splice(subIndex, 1);
};
</script>

<style scoped>
.schedule-list {
  max-width: 400px;
  margin: 0 auto;
}
.create-button {
  width: 100%;
  padding: 10px;
  background: black;
  color: white;
  font-size: 16px;
  border: none;
  cursor: pointer;
  margin-top: 10px;
}
.add-button {
  width: 100%;
  padding: 8px;
  background: #e0e0e0;
  border: none;
  text-align: left;
  cursor: pointer;
  margin-top: 5px;
}
</style>

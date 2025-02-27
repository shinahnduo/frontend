<template>
  <div class="dropdown-container">
    <!-- 드롭다운 토글 버튼 -->
    <button @click="toggleMenu" class="dropdown-btn">
      ☰
    </button>

    <!-- 드롭다운 메뉴 -->
    <transition name="fade">
      <div v-if="isOpen" class="dropdown-menu">
        <!-- 원고 -->
        <div class="menu-item">
          <div class="menu-header" @click="toggleSection('chapters')">
            <span class="icon">📕</span>
            <span>원고</span>
          </div>
          <ul v-if="sections.chapters">
            <li v-for="(chapter, index) in chapters" :key="index" class="submenu">
              <span class="icon">📖</span> {{ chapter }}
            </li>
          </ul>
        </div>

        <!-- 등장인물 -->
        <div class="menu-item">
          <div class="menu-header" @click="toggleSection('characters')">
            <span class="icon">👤</span>
            <span>등장인물</span>
          </div>
          <ul v-if="sections.characters">
            <li v-for="(character, index) in characters" :key="index" class="submenu">
              <span class="icon">🧑</span> {{ character }}
            </li>
          </ul>
        </div>

        <!-- 배경 설정 -->
        <div class="menu-item">
          <div class="menu-header" @click="toggleSection('background')">
            <span class="icon">🏞</span>
            <span>배경 설정</span>
          </div>
          <p v-if="sections.background" class="submenu">배경설정</p>
        </div>

        <!-- 추가 기능 -->
        <div class="menu-item">
          <div class="menu-header">
            <span class="icon">🗂</span> 템플릿
          </div>
          <div class="menu-header">
            <span class="icon">📂</span> 외부에서 가져오기
          </div>
          <div class="menu-header">
            <span class="icon">🔁</span> 휴지통
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

// 드롭다운 메뉴 상태
const isOpen = ref(false);

// 개별 섹션 상태
const sections = ref({
  chapters: false,
  characters: false,
  background: false,
});

// 메뉴 토글
const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

// 개별 섹션 토글
const toggleSection = (section: keyof typeof sections.value) => {
  sections.value[section] = !sections.value[section];
};

// 데이터
const chapters = ref(["1장: 블라블라", "2장: 블라블라"]);
const characters = ref(["김철수", "이춘배"]);
</script>

<style scoped>
/* 전체 컨테이너 */
.dropdown-container {
  position: relative;
}

/* 버튼 스타일 */
.dropdown-btn {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  padding: 5px;
}

/* 드롭다운 메뉴 */
.dropdown-menu {
  position: absolute;
  top: 40px;
  right: 10px;
  width: 240px;
  background: #f5f1eb;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  padding: 10px;
}

/* 메뉴 아이템 */
.menu-item {
  padding: 5px 0;
  border-bottom: 1px solid #ddd;
}

.menu-item:last-child {
  border-bottom: none;
}

/* 메뉴 헤더 (클릭 가능) */
.menu-header {
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 8px;
  font-weight: bold;
}

.menu-header:hover {
  background: #e0dbd3;
  border-radius: 4px;
}

/* 아이콘 스타일 */
.icon {
  margin-right: 8px;
}

/* 서브메뉴 */
.submenu {
  padding: 5px 15px;
  font-size: 14px;
  color: #333;
}
</style>

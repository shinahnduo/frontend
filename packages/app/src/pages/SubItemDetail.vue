<template>
  <div class="container">
    <Header />

    <div class="content">
      <!-- 사진 업로드 -->
      <div class="upload-section">
        <div class="upload-box">
          <img src="@/assets/upload-icon.png" alt="upload" class="upload-icon" />
          <span>사진 업로드</span>
        </div>
        <input type="text" placeholder="제목을 입력하세요" class="input-box" />
        <textarea placeholder="간단한 내용을 입력하세요" class="textarea-box"></textarea>
        <div class="button-group">
          <button class="gray-button">유지</button>
          <button class="white-button">AI 생성</button>
        </div>
      </div>

      <!-- AI 생성 콘텐츠 -->
      <div class="ai-section">
        <h3>AI 생성 콘텐츠</h3>
        <div class="ai-content-box">AI가 생성한 콘텐츠가 여기에 표시됩니다.</div>
      </div>
    </div>

    <!-- 하단 버튼 -->
    <div class="footer">
      <button class="gray-button">임시저장</button>
      <button class="white-button" @click="goBack">작성 취소</button>
      <button class="black-button">다음 단계</button>
      <button class="blue-button">끝내기</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
import Header from "@/components/Header.vue";

const router = useRouter();

// 이전 페이지로 이동
const goBack = () => {
  router.go(-1);
};
</script>

<style scoped>
/* 컨테이너 높이 고정 */
.container {
  width: 100%;
  max-width: 360px;
  height: 740px; /* 고정 높이 */
  display: flex;
  flex-direction: column;
  background: #fff;
  overflow: hidden; /* 초과 시 스크롤 방지 */
}

/* 콘텐츠 영역 (스크롤 가능) */
.content {
  flex-grow: 1;
  overflow: auto;
  padding: 16px;
}

/* 사진 업로드 박스 */
.upload-section {
  background: #f9f9f9;
  padding: 16px;
  border-radius: 8px;
}
.upload-box {
  width: 100%;
  height: 120px;
  background: #e0e0e0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 8px;
}
.upload-icon {
  width: 24px;
  margin-bottom: 8px;
}
.input-box,
.textarea-box {
  width: 100%;
  height: 30px;
  padding: 8px;
  margin-top: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}
.textarea-box {
  height: 90px;
  resize: none;
}
.button-group {
  display: flex;
  gap: 8px;
  margin-top: 8px;
}

/* AI 생성 콘텐츠 */
.ai-section {
  margin-top: 16px;
}
.ai-content-box {
  width: 100%;
  height: 240px;
  padding: 12px;
  background: #f0f0f0;
  border-radius: 4px;
}

/* 하단 버튼 */
.footer {
  display: flex;
  gap: 8px;
  padding: 16px;
  background: white;
  position: sticky;
  bottom: 0;
}
.gray-button,
.white-button,
.black-button,
.blue-button {
  flex: 1;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
  font-size: 10px;
}
.gray-button {
  background: #ddd;
  border: none;
}
.white-button {
  background: white;
  border: 1px solid #ddd;
}
.black-button {
  background: black;
  color: white;
  border: none;
}
.blue-button {
  background: #4a90e2;
  color: white;
  border: none;
}
</style>

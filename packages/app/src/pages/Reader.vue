<template>
  <div class="page-container">
    <!-- 헤더 컴포넌트 -->
    <HeaderComponent class="header" />

    <!-- 본문 컴포넌트 -->
    <ContentComponent class="content"/>

    <!-- 하단 버튼 컴포넌트 -->
    <FooterComponent class="footer"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeaderComponent from '../components/page/reader/FooterComponent.vue';
import ContentComponent from '../components/page/reader/FooterComponent.vue';
import FooterComponent from '../components/page/reader/FooterComponent.vue';
import Test from "@/components/page/reader/DropdownMenu.vue";

export default defineComponent({
  name: 'Reader',
  components: {
    Test,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
  },
});
</script>

<style scoped>
.page-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh; /* 화면 전체 높이 */
}

.header {
  flex: 1; /* 높이 비율 1 */
}

.content {
  flex: 20; /* 높이 비율 5 */
  overflow-y: auto; /* 본문 스크롤 가능 */
}

.footer {
  flex: 1; /* 높이 비율 1 */
}
</style>

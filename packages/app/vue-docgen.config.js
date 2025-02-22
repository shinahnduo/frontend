module.exports = {
  componentsRoot: "src/components", // 컴포넌트 경로
  components: "**/*.vue", // 모든 Vue 파일 대상
  outDir: "src/stories", // ✅ src/stories 내부에 생성하도록 설정
  defaultExamples: true, // 기본 예제 포함
  getDestFile(componentPath) {
    const relativePath = componentPath.replace(/\\/g, "/"); // 윈도우 경로 문제 해결
    return relativePath.replace("src/components", "src/stories") + ".stories.ts";
  },
};

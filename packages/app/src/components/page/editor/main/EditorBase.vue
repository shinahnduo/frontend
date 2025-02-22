<template>
  <div
    ref="main"
    class="flex flex-col wb-edit bg-theme-editor-background hover:bg-theme-editor-background-hover active:bg-theme-editor-background-active"
    :class="[
      EDITOR.configuration.draggable ? 'fixed' : 'inline-block',
      EDITOR.configuration.bars
        ? 'w-full lg:w-3/4 sm:w-10/12 shadow-xl'
        : 'w-full',
      TUTORIAL.counter === 2 ? 'z-umax' : 'z-20',
    ]"
  >
    <EditorBaseRenderHistory v-if="EDITOR.configuration.topBar" />
    <div id="entity-main" class="flex flex-col mb-auto overflow-y-auto wb-scroll">
      <SearchBar @search="onSearch" />
      <PostList :posts="filteredPosts" />
      <EditorBaseRender v-if="PROJECT.base === 'chapter'" />
      <EditorBaseSchemas v-else-if="PROJECT.base === 'annotations'" />
    </div>
    <EditorBaseRenderBar v-if="EDITOR.configuration.bottomBar" />
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import { useEditorStore } from '@/store/editor'
  import { useProjectStore } from '@/store/project'
  import { useTutorialStore } from '@/store/tutorial'
  // import SearchBar from '@/components/SearchBar.vue'
  // import PostList from '@/components/PostList.vue'


  const EDITOR = useEditorStore()
  const PROJECT = useProjectStore()
  const TUTORIAL = useTutorialStore()

  const main = ref<HTMLElement | null>(null)

  const posts = ref([
  { id: 1, title: 'First Post', content: 'This is the first post.' },
  { id: 2, title: 'Second Post', content: 'This is the second post.' },
  // 더 많은 포스트 추가
])

const searchQuery = ref('')

// const filteredPosts = computed(() => {
//   return posts.value.filter(post =>
//     post.title.toLowerCase().includes(searchQuery.value.toLowerCase())
//   )
// })

const onSearch = (query: string) => {
  searchQuery.value = query
}
</script>

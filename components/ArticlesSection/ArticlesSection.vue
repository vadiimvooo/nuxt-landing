<script setup lang="ts">
  import type { PropType } from "vue";
  import { ApiData } from "~/types/ApiData";
  import { ArticleData } from "~/types/ArticleData";
  const title = ref("");
  const articleData = ref<ArticleData[]>([]);
  const articleTitle = ref<string[]>([]);
  const navTitle = ref("");

  const skipUnwrap = { el: ref([]) };
  const el = computed(() => skipUnwrap.el.value);

  const props = defineProps({
    apiData: {
      type: Object as PropType<ApiData>,
      required: true,
    },
  });

  onBeforeMount(() => {
    const { apiData } = props;
    title.value = apiData.testTaskSecondBlockTitle;
    articleData.value = JSON.parse(
      props.apiData.testTaskSecondDescriptiveBlockItems,
    ) as ArticleData[];
    articleTitle.value = articleData.value.map((data) => data.title);
    navTitle.value = apiData.testTaskSecondBlockSideNavigationTitle;
  });

  const handleScroll = (index: number) => {
    (el.value[index] as { elementRef: HTMLElement }).elementRef.scrollIntoView({
      behavior: "smooth",
    });
  };
</script>

<template>
  <section class="px-[50px] py-[45px] max-w-[1440px] m-auto">
    <h2 class="text-center font-['Montserrat'] font-bold text-xl mb-14">
      {{ title }}
    </h2>
    <div class="flex justify-between gap-x-[60px]">
      <div class="hidden sm:block relative p-[25px]">
        <ArticleNavigation
          :title="navTitle"
          :article-title="articleTitle"
          class="sticky top-0 min-w-[60px]"
          @scroll="handleScroll($event)"
        />
      </div>
      <div>
        <Article
          v-for="(artData, i) in articleData"
          :ref="skipUnwrap.el"
          :key="artData.key"
          :article-data="artData"
          :reverse="!!(i % 2)"
          class="mb-14 sm:mb-28 last:mb-0"
        />
      </div>
    </div>
  </section>
</template>

<style scoped></style>

<template>
  <main>
    <MainHeader
      v-if="apiData"
      :title="apiData.testTaskHeaderTitle"
      :subtitle="apiData.testTaskHeaderSubtitle"
      :description="apiData.testTaskHeaderText"
      :image="apiData.testTaskHeaderImage"
      :image-text="apiData.testTaskHeaderImageAltText"
    />
    <ArticlesSection v-if="apiData" :api-data="apiData" />
    <SliderSection v-if="apiData" class="hidden xl:block" :api-data="apiData" />
  </main>
</template>

<script setup lang="ts">
  import { ApiData } from "~/types/ApiData";
  import { getApiData } from "~/api/apidata";

  const apiData = ref<ApiData | null>(null);

  onBeforeMount(async () => {
    apiData.value = await getApiData();
  });
</script>

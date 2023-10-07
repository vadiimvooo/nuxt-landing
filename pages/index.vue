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

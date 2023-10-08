<script setup lang="ts">
  import { PropType } from "vue";
  import { ApiData } from "~/types/ApiData";
  import { SliderData } from "~/types/SliderData";

  const props = defineProps({
    apiData: {
      type: Object as PropType<ApiData>,
      required: true,
    },
  });

  const title = ref("");
  const sliderData = ref<SliderData[]>([]);

  onBeforeMount(() => {
    const { apiData } = props;
    title.value = apiData.testTaskSlidesBlockTitle;
    sliderData.value = JSON.parse(
      props.apiData.testTaskSlidesBlockSlides,
    ) as SliderData[];
  });
</script>

<template>
  <div class="max-w-[1440px] m-auto px-[50px] py-[45px]">
    <h3 class="font-['Montserrat'] font-bold text-xl text-center mb-[80px]">
      {{ title }}
    </h3>
    <div>
      <Slider :slider-data="sliderData" />
    </div>
  </div>
</template>

<style scoped></style>

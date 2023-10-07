<script setup lang="ts">
  import { PropType } from "vue";
  import { ArticleData } from "~/types/ArticleData";

  const props = defineProps({
    articleData: {
      type: Object as PropType<ArticleData>,
      required: true,
    },
    reverse: {
      type: Boolean,
      default: false,
    },
  });
  const elementRef = ref(null);

  defineExpose({
    elementRef,
  });

  const { image, imageAltAtr, title, subtitle, text, buttonText, buttonLink } =
    props.articleData;
</script>

<template>
  <article
    ref="elementRef"
    class="flex flex-col items-center lg:items-start gap-[60px]"
    :class="{
      'lg:flex-row-reverse': reverse,
      'lg:flex-row': !reverse,
    }"
  >
    <img
      class="w-[300px] h-[250px] object-cover mob:w-[400px] mob:h-[300px]"
      :src="image"
      :alt="imageAltAtr"
      :class="{
        'lg:w-[476px] lg:h-[382px]': !reverse,
        'lg:w-[456px] lg:h-[368px]': reverse,
      }"
    />
    <div class="font-['Montserrat'] text-base leading-[1.45]">
      <h3
        class="mb-5 font-bold"
        :class="{ 'max-w-[455px]': !reverse, 'max-w-[564px]': reverse }"
      >
        {{ title.toUpperCase() }}
      </h3>
      <h4
        class="mb-5 font-medium"
        :class="{ 'lg:max-w-[455px]': !reverse, 'lg:max-w-[564px]': reverse }"
      >
        {{ subtitle }}
      </h4>
      <p
        class="mb-7 font-light"
        :class="{ 'lg:max-w-[455px]': !reverse, 'lg:max-w-[564px]': reverse }"
        v-html="text"
      />
      <MainButton :text="buttonText" :to="buttonLink" />
    </div>
  </article>
</template>

<style scoped></style>

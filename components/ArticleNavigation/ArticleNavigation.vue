<script setup lang="ts">
  import { PropType } from "vue";

  defineProps({
    title: {
      type: String,
      required: true,
    },
    articleTitle: {
      type: Object as PropType<string[]>,
      required: true,
    },
  });

  const emit = defineEmits(["scroll"]);
  const handleScroll = (index: number) => {
    emit("scroll", index);
  };
</script>

<template>
  <div class="font-['Montserrat'] font-bold text-base">
    <h3 class="mb-5">{{ title }}</h3>
    <nav>
      <ul class="flex flex-col gap-y-4">
        <li
          v-for="(artTitle, i) in articleTitle"
          :key="artTitle"
          class="cursor-pointer"
          @click="handleScroll(i)"
        >
          {{ artTitle.toUpperCase() }}
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped></style>

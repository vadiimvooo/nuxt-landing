<script setup lang="ts">
  import { PropType } from "vue";
  import { ButtonSize } from "~/types/ButtonSize";

  defineProps({
    text: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      required: true,
    },
    size: {
      type: String as PropType<ButtonSize>,
      default: "medium",
    },
  });
</script>

<template>
  <NuxtLink
    class="bg-red-primary flex justify-center align-middle text-white font-['Inter'] font-light text-xl ease-in-out duration-300 hover:bg-red-500"
    :class="{ medium: size === 'medium' }"
    :to="to"
    target="_blank"
  >
    <div class="self-center">
      {{ text }}
    </div>
  </NuxtLink>
</template>

<style scoped>
  .medium {
    width: 200px;
    height: 54px;
  }
</style>

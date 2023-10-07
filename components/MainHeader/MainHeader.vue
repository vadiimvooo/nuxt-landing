<script setup lang="ts">
  defineProps({
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    imageText: {
      type: String,
      required: true,
    },
  });
</script>

<template>
  <section class="bg-gray-secondary">
    <div
      class="flex flex-col-reverse gap-y-6 items-center max-w-[1440px] m-auto px-[50px] py-[45px] lg:justify-between lg:flex-row"
    >
      <div
        class="flex flex-col gap-y-[50px] max-w-[672px] p-5 pb-0 font-['Inter'] font-light text-base"
      >
        <div class="flex flex-col gap-y-[14px]">
          <h1 class="font-['Montserrat'] font-medium text-[25px]">
            {{ title }}
          </h1>
          <h2 class="font-medium text-xl">{{ subtitle }}</h2>
          <p class="font-normal" v-html="description" />
        </div>
        <MainButton :text="'Read More'" :to="'/'" />
      </div>
      <img
        :src="image"
        :alt="imageText"
        class="object-cover h-[200px] w-[614px] sm:h-[320px] lg:self-start"
      />
    </div>
  </section>
</template>

<style scoped></style>

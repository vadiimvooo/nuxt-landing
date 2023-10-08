<script setup lang="ts">
  import { PropType } from "vue";
  import { Swiper, SwiperSlide } from "swiper/vue";
  import { Pagination, Navigation, Autoplay, EffectFade } from "swiper/modules";
  import type { SliderData } from "~/types/SliderData";
  import "swiper/css";
  import "swiper/css/pagination";
  import "swiper/css/navigation";

  const modules = [Pagination, Navigation, Autoplay, EffectFade];

  defineProps({
    sliderData: {
      type: Object as PropType<SliderData[]>,
      required: true,
    },
  });
</script>

<template>
  <div class="flex gap-x-[40px] items-center justify-center mb-4">
    <button type="button" class="prev-button rotate-180">
      <img src="~/assets/img/arrow.svg" alt="prev" />
    </button>
    <div class="min-w-0">
      <swiper
        :modules="modules"
        :centered-slides="true"
        :space-between="50"
        :autoplay="{
          delay: 3000,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }"
        :pagination="{
          clickable: true,
          dynamicBullets: true,
          el: '.swiper-new-pagination',
        }"
        :navigation="{
          enabled: true,
          nextEl: '.next-button',
          prevEl: '.prev-button',
        }"
        :auto-height="true"
        class="max-w-[1120px]"
      >
        <swiper-slide
          v-for="{
            key,
            title,
            subtitle,
            description,
            buttonText,
            buttonLink,
            image,
            imageAlt,
          } in sliderData"
          :key="key"
        >
          <div class="flex gap-x-[40px]">
            <div
              class="font-['Montserrat'] text-xl font-bold flex flex-col gap-y-[25px]"
            >
              <h4>{{ title }}</h4>
              <h5 class="font-light">{{ subtitle }}</h5>
              <p v-html="description"></p>
              <MainButton :text="buttonText" :to="buttonLink" />
            </div>
            <img
              :src="image"
              :alt="imageAlt"
              class="w-[578px] h-[486px] object-cover"
            />
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <button type="button" class="next-button">
      <img src="~/assets/img/arrow.svg" alt="next" />
    </button>
  </div>
  <div class="swiper-new-pagination m-auto"></div>
</template>

<style scoped></style>

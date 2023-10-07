<template>
  <header class="bg-gray-primary">
    <div
      class="flex justify-between align-middle max-w-[1440px] m-auto md:pl-[74px] mob:pr-7 md:pr-14"
    >
      <div class="px-4 py-1 my-1 mob:px-11 mob:py-4 mob:my-[15px]">
        <NuxtLink
          to="/"
          class="font-['Montserrat'] font-medium text-[25px] block w-[74px] h-[38px]"
        >
          LOGO
        </NuxtLink>
      </div>
      <nav class="flex text-sm font-bold font-['Montserrat'] mob:text-base">
        <ul class="flex self-center">
          <li v-for="navLink in navLinks" :key="navLink.title" class="flex">
            <NuxtLink
              :to="navLink.to"
              active-class="text-link-active"
              class="flex items-center justify-center w-[70px] h-[25px] mob:w-[86px] mob:h-[30px] md:w-[120px] md:h-[42px]"
            >
              {{ navLink.title }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
  import { NavLinks } from "~/types/NavLinks";

  const navLinks: NavLinks[] = [
    { title: "NAV 1", to: "/" },
    { title: "NAV 2", to: "/nav2" },
    { title: "NAV 3", to: "/nav3" },
  ];
</script>

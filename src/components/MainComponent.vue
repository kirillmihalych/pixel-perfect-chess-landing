<template>
  <article
    class="relative p-5 bg-[url('../assets/imgs/img-background.png')] min-h-[900px] bg-[#E9DED4] bg-blend-color-burn before:content-[' '] before:bg-[url('../assets/imgs/before-bg.png')] before:bg-cover before:bg-center before:bg-no-repeat before:block before:absolute before:-left-[403px] before:-right-[122px] before:top-[383px] before:bottom-0 before:bg-blend-multiply overflow-x-hidden"
  >
    <section class="flex justify-start item-center gap-2 w-[213px] h-8">
      <div class="flex items-center justify-around">
        <KnighSvg v-for="n in 4" :key="n" class="w-[18.75px] h-[27px]" />
      </div>
      <h1 class="flex flex-col font-golos-text font-bold text-[14.42px] leading-[108%] uppercase text-stone-600">
        Клуб <br />
        четырёх коней
      </h1>
    </section>
    <section class="mt-10">
      <hgroup class="font-merriweather text-4xl font-normal text-h-color uppercase leading-[1.1]">
        <h2>Превратите<br />уездный город</h2>
        <h2 class="text-center">В столицу</h2>
        <h2 class="text-end">Земного шара</h2>
      </hgroup>
      <p class="font-golos-text font-normal text-[18px] leading-[130%] text-h-color mt-6 relative z-20">
        Оплатите взнос на телеграммы для организации Международного васюкинского турнира по шахматам
      </p>
      <div class="flex flex-col gap-[14px] mt-8">
        <button class="bg-[#1f1f1f] flex justify-center items-center px-5 py-[14px] rounded-[66px] relative z-10">
          <p class="font-golos-text font-medium text-base leading-[130%] text-center text-[#ffffff]">
            Поддержать шахматную мысль
          </p>
        </button>
        <button
          class="bg-[#ffffff] bg-opacity-90 flex justify-center items-center px-5 py-[14px] rounded-[66px] relative z-10"
        >
          <p class="font-golos-text font-medium text-base leading-[130%] text-center text-[#1f1f1f]">
            Подробнее о турнире
          </p>
        </button>
      </div>
    </section>
  </article>
</template>

<script setup lang="ts">
import KnighSvg from '../assets/icons/icon-horse.svg'
</script>

<style scoped></style>

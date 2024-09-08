<template>
  <div class="p-5">
    <section class="font-golos-text flex flex-col gap-10">
      <h2 class="font-merriweather text-4xl leading-[110%] text-[#313131] uppercase">Участники турнира</h2>
      <!-- selected member -->
      <div class="flex flex-col items-center justify-center">
        <img :src="selected_member.photo" alt="member-photo" />
        <h3 class="font-semibold text-2xl leading-[120%] mt-7">{{ selected_member.name }}</h3>
        <h4 class="font-normal text-xl leading-[120%] opacity-60 mt-2">{{ selected_member.title }}</h4>
        <a href="#" class="text-[#3057A2] px-3 py-1 border-[1px] font-medium border-[#3057A2] rounded-[62px] mt-5"
          >Подробнее</a
        >
      </div>
      <!-- end of selected member -->
      <!-- controls -->
      <div class="flex gap-3 items-center justify-center">
        <button class="flex items-center justify-center rounded-full w-9 h-9 bg-[#313131]" @click="doLeftSlide">
          <img src="../assets/icons/icon-btn-left.png" alt="btn-active" />
        </button>
        <div class="text-[#313131] leading-[120%]">
          <span>{{ selected_member.id }}</span
          ><span class="opacity-60">/ {{ members.length }}</span>
        </div>
        <button class="flex items-center justify-center rounded-full w-9 h-9 bg-[#313131]" @click="doRightSlide">
          <img src="../assets/icons/icon-btn-right.png" alt="btn-active" />
        </button>
      </div>
      <!-- end of controls -->
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue'

const getImageUrl = (name: string) => new URL(`../assets/imgs/${name}.png`, import.meta.url).href

const members = [
  {
    id: 1,
    photo: getImageUrl('img-member'),
    name: 'Хозе-Рауль Капабланка',
    title: 'Чемпион мира по шахматам',
    personal_site: '#',
  },
  {
    id: 2,
    photo: getImageUrl('img-member'),
    name: 'Эммануиль Ласкер',
    title: 'Чемпион мира по шахматам',
    personal_site: '#',
  },
  {
    id: 3,
    photo: getImageUrl('img-member'),
    name: 'Александр Алехин',
    title: 'Чемпион мира по шахматам',
    personal_site: '#',
  },
  {
    id: 4,
    photo: getImageUrl('img-member'),
    name: 'Арон Нимцович',
    title: 'Чемпион мира по шахматам',
    personal_site: '#',
  },
  {
    id: 5,
    photo: getImageUrl('img-member'),
    name: 'Рихард Рети',
    title: 'Чемпион мира по шахматам',
    personal_site: '#',
  },
  {
    id: 6,
    photo: getImageUrl('img-member'),
    name: 'Остап Бендер',
    title: 'Гроссмейстер',
    personal_site: '#',
  },
]

const selected_index = ref(0)
const selected_member = ref(members[selected_index.value])
const selectMember = () => (selected_member.value = members[selected_index.value])

function doRightSlide() {
  if (selected_index.value === members.length - 1) {
    selected_index.value = 0
  } else {
    selected_index.value += 1
  }
}
function doLeftSlide() {
  if (selected_index.value === 0) {
    selected_index.value = members.length - 1
  } else {
    selected_index.value -= 1
  }
}

const doCycleCarousel = () =>
  setInterval(() => {
    if (selected_index.value <= members.length - 1) doRightSlide()
  }, 4000)

watchEffect(() => {
  doCycleCarousel()
})

watchEffect(() => {
  selectMember()
})
</script>

<style scoped></style>

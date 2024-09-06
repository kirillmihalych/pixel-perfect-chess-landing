<template>
  <div class="p-5">
    <section class="grid gap-3">
      <p class="font-merriweather text-4xl leading-[110%] text-[#313131] uppercase">Этапы преображения Васюков</p>
      <p class="font-golos-text text-[1.125rem] leading-[120%] text-[#3057A2]">
        Будущие источники обогащения васюкинцев
      </p>
    </section>
    <section class="font-golos-text text-[#313131]">
      <!-- selected slide -->
      <div
        class="relative px-6 py-16 h-[300px] flex flex-col gap-7 bg-[url(../assets/imgs/img-background.png)] bg-[#E9DED4] bg-blend-color-burn mix-blend-normal mt-36 before:content-[' '] before:bg-[url('../assets/imgs/img-fly.png')] before:w-[21rem] before:h-[12rem] before:bg-cover before:bg-center before:bg-no-repeat before:block before:absolute before:-top-[130px]"
      >
        <div v-for="stage in selected_slide.content" :key="stage.id" class="flex gap-4 items-start justify-center">
          <div
            class="flex items-center justify-center rounded-full font-semibold text-black text-[1.25rem] leading-[120%] bg-slate-50 min-w-9 min-h-9"
          >
            <p>{{ stage.id }}</p>
          </div>
          <p class="font-medium text-[1.115rem] leading-[120%]">{{ stage.stage_info }}</p>
        </div>
      </div>
      <!-- end of selected slide -->
      <!-- controls -->
      <div class="flex gap-4 items-center justify-center mt-7">
        <button
          @click="doSlideLeft"
          :disabled="selected_index === 0"
          class="flex items-center justify-center rounded-full w-9 h-9 bg-[#313131]"
          :class="{ 'opacity-20': selected_index === 0 }"
        >
          <img src="../assets/icons/icon-btn-left.png" alt="btn-active" />
        </button>
        <ul class="flex items-center gap-[6px]">
          <li
            v-for="slide_id in 5"
            :key="slide_id"
            class="w-3 h-3 rounded-full bg-[#D9D9D9]"
            :class="{ 'bg-[#313131]': isSlideSelected(slide_id - 1) }"
          ></li>
        </ul>
        <button
          @click="doSlideRight"
          :disabled="selected_index === 4"
          class="flex items-center justify-center rounded-full w-9 h-9 bg-[#313131]"
          :class="{ 'opacity-20': selected_index === 4 }"
        >
          <img src="../assets/icons/icon-btn-right.png" alt="btn-active" />
        </button>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue'

const stages_separated = [
  {
    id: 1,
    stage_number: '1',
    stage_info: 'Строительство железнодорожной магистрали Москва-Васюки',
  },
  {
    id: 2,
    stage_number: '2',
    stage_info: 'Открытие фешенебельной гостиницы «Проходная пешка» и других небоскрёбов',
  },
  {
    id: 3,
    stage_number: '3',
    stage_info:
      'Поднятие сельского хозяйства в радиусе на тысячу километров: производство овощей, фруктов, икры, шоколадных конфет',
  },
  {
    id: 4,
    stage_number: '4',
    stage_info: 'Строительство дворца для турнира',
  },
  {
    id: 5,
    stage_number: '5',
    stage_info: 'Размещение гаражей для гостевого автотранспорта',
  },
  {
    id: 6,
    stage_number: '6',
    stage_info: 'Постройка сверхмощной радиостанции для передачи всему миру сенсационных результатов',
  },
  {
    id: 7,
    stage_number: '7',
    stage_info:
      'Создание аэропорта «Большие Васюки» с регулярным отправлением почтовых самолётов и дирижаблей во все концы света, включая Лос-Анжелос и Мельбурн',
  },
]

const stages_grouped = [
  {
    id: 1,
    content: [
      {
        id: 1,
        stage_number: '1',
        stage_info: 'Строительство железнодорожной магистрали Москва-Васюки',
      },
      {
        id: 2,
        stage_number: '2',
        stage_info: 'Открытие фешенебельной гостиницы «Проходная пешка» и других небоскрёбов',
      },
    ],
  },
  {
    id: 2,
    content: [
      {
        id: 3,
        stage_number: '3',
        stage_info:
          'Поднятие сельского хозяйства в радиусе на тысячу километров: производство овощей, фруктов, икры, шоколадных конфет',
      },
    ],
  },
  {
    id: 3,
    content: [
      {
        id: 4,
        stage_number: '4',
        stage_info: 'Строительство дворца для турнира',
      },
      {
        id: 5,
        stage_number: '5',
        stage_info: 'Размещение гаражей для гостевого автотранспорта',
      },
    ],
  },
  {
    id: 4,
    content: [
      {
        id: 6,
        stage_number: '6',
        stage_info: 'Постройка сверхмощной радиостанции для передачи всему миру сенсационных результатов',
      },
    ],
  },
  {
    id: 5,
    content: [
      {
        id: 7,
        stage_number: '7',
        stage_info:
          'Создание аэропорта «Большие Васюки» с регулярным отправлением почтовых самолётов и дирижаблей во все концы света, включая Лос-Анжелос и Мельбурн',
      },
    ],
  },
]

const selected_index = ref(0)
const selected_slide = ref(stages_grouped[selected_index.value])
const doSelectSlide = () => (selected_slide.value = stages_grouped[selected_index.value])

const isSlideSelected = (id: number) => id === selected_index.value
const doSlideRight = () => (selected_index.value += 1)
const doSlideLeft = () => (selected_index.value -= 1)

watchEffect(() => {
  doSelectSlide()
})
</script>

<style scoped></style>

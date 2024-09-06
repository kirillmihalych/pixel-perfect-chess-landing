<template>
  <div class="p-5">
    <section class="grid gap-6 font-merriweather text-[1.75rem] leading-[135%] text-[#313131] mt-12">
      <p>Чтобы поддержать Международный васюкинский турнир посетите лекцию на тему: «Плодотворная дебютная идея»</p>
      <img src="../assets/imgs/img-chess-players.png" alt="img-chess-players" />
      <p>посетите лекцию на тему: <span class="text-[#F54932] font-bold">«Плодотворная дебютная идея»</span></p>
    </section>
    <section class="mt-[2.5rem]">
      <img src="../assets/imgs/chess-player.png" alt="img-chess-player" class="scale-110" />
      <div class="mt-10">
        <p class="font-merriweather text-[1.75rem] leading-[135%] text-[#313131] uppercase">
          и Сеанс <span class="text-[#F54932] font-bold">одновременной игры в шахматы на 160 досках</span> гроссмейстера
          О. Бендера
        </p>
        <table class="font-golos-text text-[1.25rem] leading-[120%] text-[#313131] w-full mt-9">
          <tbody>
            <tr
              class="flex flex-col border-b-[2px] last:border-b-0 border-[#D0D0D0]"
              v-for="info in tableInfo"
              :key="info.id"
            >
              <td class="xl:border-r-2 border-[#D0D0D0] p-2 pl-0 opacity-[70%]">{{ info.definition }}</td>
              <td class="font-semibold p-2 pl-0">{{ info.value }}</td>
            </tr>
          </tbody>
        </table>
        <a href="#" class="mt-8 block text-[#3057A2] text-[1.125rem] leading-[120%] font-golos-text"
          >По всем вопросам обращаться в администрацию к К. Михельсону</a
        >
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const tableInfo = [
  {
    id: 1,
    definition: 'Место проведения:',
    value: 'Клуб «Картонажник»',
  },
  {
    id: 2,
    definition: 'Дата и время мероприятия:',
    value: '22 июня 1927 г. в 18:00',
  },
  {
    id: 3,
    definition: 'Стоимость входных билетов:',
    value: '20 коп.',
  },
  {
    id: 4,
    definition: 'Плата за игру:',
    value: '50 коп.',
  },
  {
    id: 5,
    definition: 'Взнос на телеграммы:',
    value: '21 руб. 16 коп.',
  },
]
</script>

<style scoped></style>

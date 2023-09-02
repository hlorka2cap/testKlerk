<template>
  <ul class="w-[max-content] m-auto flex gap-[1.5rem] mt-[1.5rem]">
    <li v-for="tab in tabs" :key="tab.id" class="cursor-pointer pb-[1.5rem] font-roboto font-normal tab" :class="{
      'relative': tab.isActive,
      'after:content-[\'\']': tab.isActive,
      'after:absolute': tab.isActive,
      'after:left-0': tab.isActive,
      'after:bottom-0': tab.isActive,
      'after:w-full': tab.isActive,
      'after:h-[0.125rem]': tab.isActive,
      'after:bg-[#5A8CF1]': tab.isActive,
      'font-medium': tab.isActive,
      'text-[#5A8CF1]': tab.isActive
    }" @click="pickActive" :data-id="tab.id">
      {{ tab.tabTitle }}
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      tabs: [
        { tabTitle: 'Рассылки', id: 1, isActive: true },
        { tabTitle: 'Соцсети', id: 2, isActive: false },
        { tabTitle: 'Менеджеры', id: 3, isActive: false },
      ],
    }
  },

  methods: {
    pickActive(event) {
      let targetId = event.target.dataset.id;
      for (let tab in this.tabs) {
        if(this.tabs[tab].id === +targetId) this.tabs[tab].isActive = true
        else this.tabs[tab].isActive = false
      }
    }
  }
}
</script>

<style></style>
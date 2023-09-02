<template>
  <p class="text-[1.5rem] font-medium lg:text-center text-left traking-[-0.015rem]">Выберите рассылки, которые подходят именно вам</p>
  <form @submit.prevent="formSubmit" class="lg:px-[1.5rem]">
    <div class="bg-[#FFFFFF] overflow-hidden rounded-l-[0.5rem] rounded-r-[6.25rem] flex mt-[1.5rem]">
      <input type="text" class="w-full p-[1rem] focus:outline-none" placeholder="Электронная почта" v-model="inputValue">
      <button class="px-[2rem] py-[1rem] bg-[#316FEE] rounded-[6.25rem] text-white hover:bg-[#5A8CF1]"
        type="submit">Подписаться</button>
    </div>
    <div class="mt-[1rem] w-[max-content] flex gap-[0.5rem]">
      <label class="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" v-model="onAll" value="" class="sr-only peer">
        <div
          class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
        </div>
        <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Подписаться на все рассылки</span>
      </label>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      inputValue: '',
      onAll: false
    }
  },
  methods: {
    formSubmit() {
      console.log('inputValue', this.inputValue);
      console.log('onAll', this.onAll)
      this.inputValue = '';
      this.onAll = false;

      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: "Vue POST Request Example",
        })
      };

      fetch("https://jsonplaceholder.typicode.com/posts", requestOptions)
        .then(response => response.json())
        .then(data => (this.postId = data.id));
    }
  }
} 
</script>
<style></style>
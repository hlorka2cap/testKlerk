<template>
    <ul class="flex flex-wrap gap-[1.5rem] mt-[2rem]">
        <li class="lg:w-[29.75rem] w-full hover:custom-shadow bg-white p-[1.5rem] rounded-[1rem] relative" v-for="mailingItem in mailingItems"
            :key="mailingItem.id">
            <div class="w-9/12 text-left">
                <p class="text-[#999] text-[0.8125rem]">{{ mailingItem.time }}</p>
                <p class="text-[1.25rem] leading-[1.75rem] font-medium">{{ mailingItem.mailingTitle }}</p>
                <p class="mt-[0.5rem] text-[0.875rem]">{{ mailingItem.description }}</p>
                <ul class="mt-[1rem] flex flex-col gap-[0.5rem]">
                    <li class="leading-none before:content-[arrow.svg]" v-for="advantage in mailingItem.list"
                        :key="advantage">{{ advantage }}</li>
                </ul>
                <div class="flex gap-[0.5rem] mt-[1rem]">
                    <label class="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" v-model="mailingItem.isOn" value="" class="sr-only peer">
                        <div
                            class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
                        </div>
                        <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Уже получает {{
                            mailingItem.mailingCounter }} человек</span>
                    </label>
                </div>
                <img class="absolute w-[5rem] top-[1.5rem] right-[1.5rem]" :src="mailingItem.pathToImage" alt="">
            </div>

        </li>
    </ul>
</template>

<script>
import config from './config.js'
export default {
    data() {
        return {
            mailingItems: [
                {
                    time: 'Перед рассветом',
                    mailingTitle: 'Утренний бухгалтер',
                    description: 'Самые важные новости и события за день. Кратко, по делу, структуировано',
                    list: [
                        'Новости для бухгалтеров, ИП и директора',
                        'Подборка статей за день'
                    ],
                    pathToImage: `${config.imagePath}mailing1.png`,
                    mailingCounter: 0,
                    id: 1,
                    isOn: false
                },
                {
                    time: 'После заката',
                    mailingTitle: 'Ночной бухгалтер',
                    description: 'Самая краткая газета о налогах и бухучете в мире — современная рассылка для чтения.',
                    list: [
                        'Анализ, оценка и только самое главное',
                        'Лучшие комменты юзеров в обзоре'
                    ],
                    pathToImage: '.././assets/images/mailing2.png',
                    mailingCounter: 0,
                    id: 2,
                    isOn: false
                },
                {
                    time: 'Раз в две недели',
                    mailingTitle: 'Ножницы скидок',
                    description: 'Подборка самых выгодных и полезных спецпредложений от надежных компаний.',
                    list: [
                        'Акции и скидки от лидеров рынка',
                        'Те, кто подписался – экономят много денег'
                    ],
                    pathToImage: '.././assets/images/mailing3.png',
                    mailingCounter: 0,
                    id: 3,
                    isOn: false
                },
                {
                    time: 'По мере появления анонсов',
                    mailingTitle: 'Чемодан вебинаров',
                    description: 'Подборка с анонсами бесплатных вебинаров на самые топовые темы при участии экспертов.',
                    list: [
                        'Никогда не пришлем платные вебинары',
                        'Подборка топовых тем для вебинаров'
                    ],
                    pathToImage: '.././assets/images/mailing4.png',
                    mailingCounter: 0,
                    id: 4,
                    isOn: false
                },
            ]
        }
    }
}
</script>

<style></style>
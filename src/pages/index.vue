<script>
import { useHead } from '@unhead/vue'

export default {
  setup(){
    useHead({
      title: 'Rikku Blog',
      meta: [
        {
          name: 'description',
          content: '歡迎來到我的部落格~~',
        },
      ],
    })
  }
}

</script>

<template>
  <div>
    <header class="container px-4">
      <div class="py-6 flex justify-between items-center">
        <RouterLink to="/">
          <heroicons-outline:book-open class="w-10 h-10 text-violet-600"/>
        </RouterLink>
        <div>
          <a href="https://github.com/Rikkubook" target="_blank" class="text-gray-400 hover:text-violet-600">
            <ri:github-line class="w-6 h-6"/>
          </a>
        </div>
      </div>

      <div class="pt-6 pb-12 border-b border-gray-300">
        <h1 class="text-4xl text-gray-900 mb-6 font-medium tracking-wide sm:text-5xl lg:text-6xl">Rikku Blog</h1>
        <p class="text-xl text-gray-500 tracking-wider">歡迎來到我的部落格～</p>
      </div>
    </header>
    <main class="container px-4 py-12">
      <ul class="space-y-10 sm:space-y-16">
        <li class="sm:flex" v-for="i in 4">
          <!-- aspect-[4/3] -->
          <RouterLink to="/posts/my-blog">
            <img class="sm:w-[300px] aspect-video object-cover rounded-lg" src="https://fakeimg.pl/440x320/282828/eae0d0/?retina=1" alt="">
          </RouterLink>
          <div class=" mt-4 sm:mt-0 sm:ml-6">
            <h4 class="text-2xl font-bold tracking-wide mb-2">
              <RouterLink to="/posts/my-blog" class="text-gray-800 hover:text-violet-600">
                我的文章
              </RouterLink>
            </h4>
            <div class="text-gray-400 text-sm tracking-wider mb-3">2023/01/01</div>
            <p class="text-gray-500 mb-4">Lorem ipsum dolor sit.</p>
            <RouterLink to="/posts/my-blog" class="flex items-center text-violet-500 hover:text-violet-400 tracking-wider">
              更多 <heroicons-outline:chevron-right class="w-4 h-4 ml-1"/>
            </RouterLink>
          </div>
        </li>
      </ul>

      <!-- 分頁器 -->
      <ul class="mt-12 flex justify-center items-center">
        <li>
          <RouterLink to="/" class="flex justify-center items-center h-9 px-3 text-gray-400 hover:text-violet-600 text-lg font-medium">
            <heroicons-outline-arrow-left class="w-4 h-4 ml-1"/>
          </RouterLink>
        </li>
        <li v-for="i in 3">
          <RouterLink to="/" class="flex justify-center items-center h-9 px-3 text-gray-400 hover:text-violet-600 text-lg font-medium">
            {{  i  }}
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/" class="flex justify-center items-center h-9 px-3 text-gray-400 hover:text-violet-600 text-lg font-medium">
            <heroicons-outline-arrow-right class="w-4 h-4 ml-1"/>
          </RouterLink>
        </li>
      </ul>
    </main>
  </div>
</template>

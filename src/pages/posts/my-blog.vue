<script setup>

</script>

<template>
  <div>
    <header class="container px-4">
      <div class="py-6 flex justify-between items-center">
        <RouterLink to="/" class="flex items-center">
          <heroicons-outline:book-open class="w-10 h-10 text-violet-600"/>
          <div class="ml-2 text-gray-900 text-lx font-medium">Rikku Blog</div>
        </RouterLink>
        <div>
          <a href="https://github.com/Rikkubook" target="_blank" class="text-gray-400 hover:text-violet-600">
            <ri:github-line class="w-6 h-6"/>
          </a>
        </div>
      </div>
    </header>
    <article class="container px-4 py-12">
      <div class="text-center mb-10">
        <h1 class="text-5xl font-medium tracking-wide">我的的文張</h1>
        <div class="mt-4 text-gray-400 tracking-wider">2023/01/01</div>
      </div>
      <!-- 可以自己改 prose 樣式 -->
      <div class="mx-auto prose lg:prose-xl prose-headings:font-medium prose-a:text-violet-500 hover:prose-a:text-violet-400">
        <h2>Garlic bread with cheese: What the science tells us</h2>
        <img alt="" src="https://fakeimg.pl/440x320/282828/eae0d0/?retina=1">
        <p>
          For years parents have espoused the health benefits of eating garlic bread with cheese to their
          children, with the food earning such an iconic status in our culture that kids will often dress
          up as warm, cheesy loaf for Halloween.
          <a href="https://github.com/Rikkubook" target="_blank">github.com/Rikkubook</a>
        </p>
        <p>
          But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases
          springing up around the country.
        </p>
      </div>


    </article>
  </div>
</template>

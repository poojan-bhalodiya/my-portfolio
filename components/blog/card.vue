<template>
  <div
    class="media-shadow flex flex-col overflow-hidden rounded-lg bg-secondary-900 md:flex-row"
  >
    <NuxtLink
      :to="`/blog/${slug}`"
      class="w-full md:flex-[0_0_220px]"
      target="_blank"
    >
      <img
        alt="No Image Found For Blog"
        :src="image"
        class="aspect-square h-52 w-full object-cover object-center md:h-full"
      />
    </NuxtLink>
    <div class="flex flex-col justify-between p-4 w-full">
      <div>
        <div
          class="max-w-xs gap-3 font-body text-xs font-normal text-grey-500 md:items-center"
        >
          <span>{{ dateFormat(wdate) }}</span>
        </div>
        <div class="space-y-1 py-4 text-grey-900">
          <a
            href="/blog/5g-how-travel-esim-saved-my-day"
            class="text-truncate-2 text-sm font-bold md:text-base"
            target="_blank"
          >
            {{ title }}
          </a>
          <p class="text-truncate-2 text-sm">
            {{ description }}
          </p>
        </div>
        <!-- Tags Here -->
        <div class="flex flex-wrap gap-2" v-if="tags && tags.length">
          <div
            v-for="(item, i) in tags"
            class="tag flex-wrap items-center rounded bg-grey-100 px-2 py-0.5 text-xs font-normal text-grey-600 bg-secondary-700 capitalize"
          >
            {{ item }}
          </div>
        </div>
      </div>
      <div class="mt-6 flex justify-end">
        <NuxtLink
          :to="`/blog/${slug}`"
          class="text-sm font-bold text-white"
          target="_blank"
        >
          Read more
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  image: String,
  tags: Array,
  title: String,
  description: String,
  slug: String,
  wdate: String,
});
</script>

<template>
  <div>
    <div class="py-8 flex flex-col items-center w-full overflow-auto">
      <!-- Blog Listing -->
      <div class="">
        <h1 class="text-2xl font-semibold text-center">All Blogs</h1>
      </div>

      <div
        class="w-full md:w-2/3 border border-secondary-700 md:rounded py-4 mt-10 text-center bg-secondary-800 flex items-center justify-between px-1 md:px-4"
      >
        <!-- Search Blog -->
        <input
          type="text"
          v-model="searchKey"
          class="bg-secondary-500 rounded p-2"
          placeholder="Search In Blogs"
        />

        <!-- date wise -->
        <select v-model="selected" class="bg-secondary-500 p-2 rounded">
          <option v-for="(option, i) in options" :value="option.value">
            {{ option.text }}
          </option>
        </select>
      </div>
      <div v-if="loading" class="mt-10 w-3/4 md:w-2/3 space-y-4">
        <div
          v-for="(_, i) in 4"
          :key="i"
          class="flex h-full w-full animate-pulse flex-col items-center gap-5 space-y-4 rounded-md bg-secondary-700 p-4 sm:h-[200px] md:h-[230px] md:flex-row"
        >
          <div
            class="aspect-square h-32 w-32 rounded-md bg-secondary-600 md:h-full md:w-96"
          ></div>
          <div class="flex h-full w-full flex-col space-y-3">
            <div class="h-7 w-full rounded-md bg-secondary-600 md:h-10"></div>
            <div class="h-14 w-full rounded-md bg-secondary-600 md:h-28"></div>
            <div class="h-6 w-full rounded-md bg-secondary-600 md:h-10"></div>
          </div>
        </div>
      </div>
      <div class="mt-10 w-3/4 md:w-2/3 space-y-4" v-else-if="finalBlogs.length">
        <BlogCard
          v-for="(blog, i) in finalBlogs"
          :image="blog.thumbnail"
          :tags="blog.tags"
          :title="blog.title"
          :description="blog.description"
          :slug="blog.slug"
          :wdate="blog.date"
          :is-blog="true"
        />
      </div>
      <div v-else>
        <div class="flex items-center justify-center my-10 flex-col">
          <div class="text-center text-2xl py-6">No Results Found</div>
          <button
            @click="resetFilter"
            class="border p-2 border-secondary-600 rounded hover:bg-secondary-700"
          >
            Reset Filter
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { debounce } from "lodash-es";
import blogDetails from "@/data/blogs/detail.js";
import { ref, computed } from "vue";

useHead({
  title: "Blogs | Poojan Bhalodiya",
  meta: [
    { property: "og:site_name", content: "Blogs | Poojan Bhalodiya" },
    {
      name: "description",
      content: `Explore a curated collection of insightful articles on the blog page, where creativity meets expertise. Dive into a world of compelling stories, tips, and inspiration that showcase the passion and knowledge behind the portfolio..`,
    },
    {
      name: "keywords",
      content: `poojan patel, Poojan Bhalodiya, Ahmedabad, Backend Developer, nodejs developer, Blogs, Blogs List, Blog, articles, technology blog`,
    },
    {
      property: "image",
      content:
        "https://res.cloudinary.com/dhntmsget/image/upload/v1707051471/250X250ProfilePic.png",
    },
    { hid: "og:type", property: "og:type", content: "website" },
    {
      property: "og:url",
      content: `https://poojan-bhalodiya.vercel.app/blogs`,
    },
    {
      property: "og:title",
      content: `Blogs | Poojan Bhalodiya`,
    },
    {
      property: "og:description",
      content: `Explore a curated collection of insightful articles on the blog page, where creativity meets expertise. Dive into a world of compelling stories, tips, and inspiration that showcase the passion and knowledge behind the portfolio..`,
    },
    {
      property: "og:image",
      content:
        "https://res.cloudinary.com/dhntmsget/image/upload/v1707051471/250X250ProfilePic.png",
    },
    {
      name: "og:keywords",
      content: `poojan patel, Poojan Bhalodiya, Ahmedabad, Backend Developer, nodejs developer, Blogs, Blogs List, Blog, articles, technology blog`,
    },
  ],
});

const loading = ref(true);

// Sorting & Searching
const searchKey = ref("");
const selected = ref("DESC");
const options = ref([
  { text: "Oldest to Newest", value: "ASC" },
  { text: "Newest to Oldest", value: "DESC" },
]);

const resetFilter = () => {
  searchKey.value = "";
  selected.value = "ASC";
};

watch(searchKey, () => {
  debouncedSearch();
});
watch(selected, () => {
  getBlogs();
});

onMounted(() => {
  getBlogs();
});

const debouncedSearch = debounce(() => {
  getBlogs();
}, 500);

// Display Blogs
const finalBlogs = ref([]);
const filteredBlogs = computed(() => {
  // Filter blogs based on searchKey
  const filtered = blogDetails.filter((blog) =>
    blog.description.toLowerCase().includes(searchKey.value.toLowerCase())
  );
  console.log("filtered resulkts : ", filtered);
  // Sort filtered blogs based on selected value
  if (selected.value === "ASC") {
    return filtered.sort((a, b) => getOriginalDate());
  } else if (selected.value === "DESC") {
    return filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
  }

  finalBlogs.value = filtered;
});

function getBlogs() {
  loading.value = true;
  setTimeout(() => {
    let result = [];
    const filtered = blogDetails.filter((blog) =>
      blog.title.toLowerCase().includes(searchKey.value.toLowerCase())
    );

    // Sort filtered blogs based on selected value
    if (selected.value === "ASC") {
      result = filtered.sort((a, b) => new Date(a.date) - new Date(b.date));
    } else if (selected.value === "DESC") {
      result = filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
    }
    finalBlogs.value = result;
    loading.value = false;
  }, 1000);
}
</script>

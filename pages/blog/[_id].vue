<template>
  <div class="flex items-center justify-center flex-col">
    <img :src="data.blogDetail?.banner" class="min-h-20 md:h-auto object-cover md:object-cover" />
    <div
      class="flex items-center justify-center py-6 md:py-10 relative flex-col space-y-2"
    >
      <div class="w-full">
        <button
          @click="$router.back()"
          class="bg-secondary-925 ml-5 rounded-2xl flex items-center justify-start p-2 gap-2 group hover:gap-5 transition-all duration-300"
        >
          <Icon
            name="mdi:arrow-left"
            class="h-6 w-6 group-hover:text-clay-400"
          />
          <span>Go Back</span>
        </button>
      </div>
      <article
        class="prose md:prose-lg w-4/5 article_style_2"
        v-if="data.article"
      >
        <ContentRenderer :value="data.article">
          <template #empty>
            <p>No content found.</p>
          </template>
        </ContentRenderer>
      </article>
    </div>
  </div>
</template>
<script setup>
import blogDetails from "@/data/blogs/detail.js";
const { path } = useRoute();
const route = useRoute();

// Fetch Details on SSR
const { data: data } = await useAsyncData("data", async () => {
  const blogDetail = blogDetails.filter((element) => {
    return element.slug == route.params._id;
  });

  let article = await queryContent(path).findOne();
  return {
    article: article,
    blogDetail: blogDetail.length ? blogDetail[0] : null,
  };
});

// Set Heads
useHead({
  title: data.value.blogDetail.title || "Blog Title",
  meta: [
    {
      property: "og:site_name",
      content: data.value.blogDetail?.title || "Blog Site Name",
    },
    {
      name: "description",
      content: data.value.blogDetail?.description || "Blog Description",
    },
    {
      name: "keywords",
      content: data.value.blogDetail?.meta?.keywords || "Blog Keywords",
    },
    {
      property: "image",
      content: data.value.blogDetail?.thumbnail || "Blog Thumbnail",
    },
    { hid: "og:type", property: "og:type", content: "website" },
    {
      property: "og:url",
      content: data.value.blogDetail?.meta?.url || "Blog URL",
    },
    {
      property: "og:title",
      content: data.value.blogDetail?.title || "Blog Title",
    },
    {
      property: "og:description",
      content: data.value.blogDetail?.description || "Blog Description",
    },
    {
      property: "og:image",
      content: data.value.blogDetail?.thumbnail || "Blog Thumbnail",
    },
    {
      name: "og:keywords",
      content:
        data.value.blogDetail?.meta?.keywords.join(", ") || "Blog Keywords",
    },
  ],
});

if (!data.value.blogDetail) {
  console.error("No Blog Details Found at Slug File");
}
</script>
<style lang="scss">
.article_style_2 {
  @apply text-white prose-a:text-white prose-h1:text-white;
  code {
    @apply text-gray-400 p-2;
  }
  table {
    border-collapse: collapse;
    overflow: hidden;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  }

  th,
  td {
    padding: 15px;
    background-color: rgba(255, 255, 255, 0.2);
    color: #fff;
  }

  th {
    text-align: left;
  }

  thead {
    th {
      background-color: #55608f;
    }
  }

  tbody {
    tr {
      &:hover {
        background-color: rgba(173, 173, 173, 0.3);
      }
    }
    td {
      &:hover {
        &:before {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          top: -9999px;
          bottom: -9999px;
          background-color: #cfcfcf33;
          z-index: -1;
        }
      }
    }
  }
  a {
    color: #007bff;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
  img {
    @apply border rounded-md overflow-hidden;
  }
  p {
    @apply text-white;
  }
}
</style>

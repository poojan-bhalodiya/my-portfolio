<template>
  <div class="flex items-center justify-center my-10">
    <article class="prose md:prose-lg w-4/5 article_style_2">
      <ContentRenderer :value="data">
        <template #empty>
          <p>No content found.</p>
        </template>
      </ContentRenderer>
    </article>
  </div>
</template>
<script setup>
const { path } = useRoute();

const { data } = await useAsyncData(async () => {
  let article = queryContent(path).findOne();
  return await article;
});
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

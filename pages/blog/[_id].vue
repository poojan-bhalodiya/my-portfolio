<template>
  <div class="flex items-center justify-center my-10">
    <div class="lg:prose-xl md:prose-lg text-white w-4/5">
      <ContentRenderer :value="data">
        <template #empty>
          <p>No content found.</p>
        </template>
      </ContentRenderer>
    </div>
  </div>
</template>
<script setup>
const { path } = useRoute();

const { data } = await useAsyncData(async () => {
  let article = queryContent(path).findOne();
  console.log("article", article);
  return await article;
});
</script>

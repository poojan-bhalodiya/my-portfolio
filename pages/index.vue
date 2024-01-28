<template>
  <div>Page Index</div>
  <!-- <img src="public/profile-pic.jpg" /> -->
</template>
<script setup>
useHead({
  title: "Poojan Bhalodiya",
  meta: [
    { property: "og:site_name", content: "Poojan Bhalodiya" },
    {
      name: "description",
      content: `My Personal Portfolio`,
    },
    {
      name: "keywords",
      content: `poojan patel, Poojan Bhalodiya, Ahmedabad, Backend Developer`,
    },
    {
      property: "image",
      content: "public/profile-pic.jpg",
    },
    { hid: "og:type", property: "og:type", content: "website" },
    {
      property: "og:url",
      content: `https://poojan-bhalodiya.vercel.app/`,
    },
    {
      property: "og:title",
      content:
        `Poojan Bhalodiya`,
    },
    {
      property: "og:description",
      content: `My Personal Portfolio`,
    },
    {
      property: "og:image",
      content: "public/profile-pic.jpg",
    },
    {
      name: "og:keywords",
      content: `poojan patel, Poojan Bhalodiya, Ahmedabad, Backend Developer`,
    },
  ],
});
</script>

<template>
  <div class="bg-secondary">
    <h1>Hello World</h1>
  </div>
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
      content: `poojan patel, Poojan Bhalodiya, Ahmedabad, Backend Developer, nodejs developer`,
    },
    {
      property: "image",
      content:
        "https://res.cloudinary.com/dhntmsget/image/upload/v1706473841/qcfk4ghdrkmwcq94mivz.jpg",
    },
    { hid: "og:type", property: "og:type", content: "website" },
    {
      property: "og:url",
      content: `https://poojan-bhalodiya.vercel.app/`,
    },
    {
      property: "og:title",
      content: `Poojan Bhalodiya`,
    },
    {
      property: "og:description",
      content: `My Personal Portfolio`,
    },
    {
      property: "og:image",
      content:
        "https://res.cloudinary.com/dhntmsget/image/upload/v1706473841/qcfk4ghdrkmwcq94mivz.jpg",
    },
    {
      name: "og:keywords",
      content: `poojan patel, Poojan Bhalodiya, Ahmedabad, Backend Developer`,
    },
  ],
});
</script>

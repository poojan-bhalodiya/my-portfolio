<template>
  <div class="flex items-center justify-center w-full py-8">
    <div class="container mx-7">
      <!-- Heading -->
      <div class="flex items-center justify-center flex-col">
        <h1 class="text-center text-4xl font-bold">About Me</h1>
        <p class="text-center mt-6 max-w-3xl text-lg">
          I am Poojan Bhalodiya, a creative mind shaping ideas into reality.
          Specializing in Backend developer , I bring a unique perspective to
          every project. Explore my portfolio and let's collaborate on your next
          venture.
        </p>
      </div>

      <!-- Image & Intro -->
      <div
        class="gap-8 mt-14 flex items-center justify-center md:flex-row flex-col"
      >
        <!-- Image Here -->
        <div
          class="w-[350px] h-auto border flex items-center justify-center overflow-hidden rounded-md border-secondary-700"
        >
          <img
            src="../static/profile-1.jpg"
            alt="No Image Found"
            class="object-center opacity-50 hover:opacity-90 transition-all duration-700"
          />
        </div>
        <!-- Intro Here -->
        <div class="md:w-1/2 max-w-md text-center md:text-start">
          <p class="text-orange-400 text-2xl font-semibold">Poojan Bhalodiya</p>
          <p class="font-semibold">Backend Developer</p>
          <p class="mt-5">
            Hello, I'm Poojan Bhalodiya, and I'm set to complete my B.voc from
            Silver Oak University in 2024. With a strong foundation in Uneecops
            Business Solutions Pvt. Ltd., where I garnered 1.8 years of
            experience, my expertise spans SAP B1, MSSQL, Crystal Reports, and
            Hana Studio. Driven by a fascination with database interactions, I
            recently redirected my career path towards NodeJS, emphasizing
            backend development. This transition underscores my commitment to
            exploring and mastering the dynamic field of backend technologies.
          </p>

          <div
            class="mt-5 flex gap-3 items-center justify-center md:justify-start"
          >
            <button
              @click="$router.push({ path: `/contact` })"
              class="border p-3 border-orange-400 rounded-md hover:ring hover:ring-clay-400 font-semibold"
            >
              Contact Me
            </button>
            <button
              @click="$router.push({ path: `/resume` })"
              class="border p-3 border-orange-400 rounded-md hover:ring hover:ring-clay-400 font-semibold"
            >
              Resume
            </button>
          </div>
        </div>
      </div>
      <!-- My Journey -->
      <div class="mt-16 md:mt-20">
        <h2 class="font-semibold text-2xl text-center">My Journey</h2>
        <div
          class="flex mt-5 flex-wrap items-center justify-center gap-5 md:gap-10"
        >
          <div v-for="(item, i) in journey" :key="i" class="">
            <div class="flex rounded items-center justify-center gap-2">
              <div
                class="h-10 w-10 border border-dotted flex items-center justify-center rounded-md text-clay-400"
              >
                <Icon :name="item.icon" class="text-2xl" />
              </div>
              <div class="">
                <p class="font-semibold">
                  {{ item.title }}
                </p>
                <p class="text-clay-400 text-sm">
                  {{ item.subtitle }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- My Intrest -->
      <div class="mt-16 md:mt-20">
        <h2 class="font-semibold text-2xl text-center">My Interests</h2>
        <div class="flex mt-5 flex-wrap justify-center gap-6 md:gap-12">
          <div v-for="(item, i) in intrests" :key="i" class="">
            <div class="flex rounded items-center justify-center gap-2">
              <div
                class="h-12 w-12 flex items-center justify-center rounded-md text-clay-400"
              >
                <Icon :name="item.icon" class="text-3xl" />
              </div>
              <div class="">
                <p class="font-semibold">
                  {{ item.label }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
useHead({
  title: "About Me | Poojan Bhalodiya",
  meta: [
    { property: "og:site_name", content: "About Me | Poojan Bhalodiya" },
    {
      name: "description",
      content: `Poojan Bhalodiya, an Ahmedabad-based Backend Developer specializing in Node.js, shares his journey and interests in the world of technology.`,
    },
    {
      name: "keywords",
      content: `poojan patel, Poojan Bhalodiya, Ahmedabad, Backend Developer, nodejs developer, about, ,My Journey, 'My Intrest`,
    },
    {
      property: "image",
      content:
        "https://res.cloudinary.com/dhntmsget/image/upload/v1707051471/250X250ProfilePic.png",
    },
    { hid: "og:type", property: "og:type", content: "website" },
    {
      property: "og:url",
      content: `https://poojan-bhalodiya.vercel.app/about`,
    },
    {
      property: "og:title",
      content: `About Me | Poojan Bhalodiya`,
    },
    {
      property: "og:description",
      content: `Poojan Bhalodiya, an Ahmedabad-based Backend Developer specializing in Node.js, shares his journey and interests in the world of technology.`,
    },
    {
      property: "og:image",
      content:
        "https://res.cloudinary.com/dhntmsget/image/upload/v1707051471/250X250ProfilePic.png",
    },
    {
      name: "og:keywords",
      content: `poojan patel, Poojan Bhalodiya, Ahmedabad, Backend Developer, nodejs developer, about, ,My Journey, 'My Intrest`,
    },
  ],
});

const intrests = [
  {
    icon: "fluent:xbox-controller-16-regular",
    label: "Video Games",
  },
  {
    icon: "mingcute:headphone-fill",
    label: "Music",
  },
  {
    icon: "ph:bag",
    label: "Traveling",
  },
];

const journey = [
  {
    icon: "simple-line-icons:badge",
    title: "1.8 Years Job",
    subtitle: "Experience",
  },
  {
    icon: "mdi:presentation-play",
    title: "6+ Projects",
    subtitle: "Completed",
  },
  {
    icon: "carbon:tool-kit",
    title: "Product Work",
    subtitle: "Service Experiene",
  },
];
</script>

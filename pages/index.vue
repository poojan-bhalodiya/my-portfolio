<template>
  <div class="flex items-center justify-center w-full py-8">
    <div class="container mx-7 space-y-10">
      <!-- Short Intro  -->
      <div
        class="flex items-start justify-between gap-10 md:gap-20 bg-secondary-925 rounded-md p-5"
      >
        <div class="text-xl">
          Hello!, I'm Poojan Bhalodiya, a backend developer. I have completed
          Bachelor's in Bachelor of vocation in 2024. Proficient in Node.js, I
          bring expertise in crafting robust and efficient backend solutions...
          <NuxtLink to="/about" class="text-clay-400">read more</NuxtLink>
        </div>
        <div class="rounded-full border-secondary-800">
          <img
            src="../static/profile-1.jpg"
            class="rounded-full overflow-hidden max-h-28 min-w-10"
          />
        </div>
      </div>

      <!-- Short Tech Intro.. -->
      <div class="border-4 border-secondary-925 rounded-md p-5 text-xl">
        <p>🧑‍💻 i like to develop Apps With...</p>
        <div class="pt-5 pl-5 flex flex-wrap gap-5">
          <button
            v-for="(item, i) in technologies"
            :key="i"
            class="rounded-full h-16 w-16 border border-secondary-925 hover:bg-secondary-925"
            @click="$router.push({ path: `/resume` })"
          >
            <Icon :name="item.icon" class="text-4xl text-clay-400" />
          </button>
        </div>
      </div>

      <!-- Recent Blogs... -->
      <div class="border-4 border-secondary-925 rounded-md p-5 text-xl">
        <div class="flex items-center justify-between">
          <h2 class="md:text-2xl">Recent Blog :</h2>
          <NuxtLink
            to="blogs"
            class="p-2 border-clay-400 border rounded-md opacity-80 hover:opacity-100"
          >
            Explore Blogs
          </NuxtLink>
        </div>
        <div class="mt-5">
          <BlogCard
            v-for="(blog, i) in blogToShow.slice(0, 1)"
            :image="blog.thumbnail"
            :tags="blog.tags"
            :title="blog.title"
            :description="blog.description"
            :slug="blog.slug"
            :wdate="blog.date"
            :is-blog="true"
          />
        </div>
      </div>

      <!-- Recent Blogs... -->
      <div class="border-4 border-secondary-925 rounded-md p-5 text-xl">
        <div class="flex items-center justify-between">
          <h2 class="md:text-2xl">Recent Project :</h2>
          <NuxtLink
            to="blogs"
            class="p-2 border-clay-400 border rounded-md opacity-80 hover:opacity-100"
          >
            Explore Projects
          </NuxtLink>
        </div>
        <div class="mt-5">
          <BlogCard
            v-for="(blog, i) in projectToShow.slice(0, 1)"
            :image="blog.thumbnail"
            :tags="blog.tags"
            :title="blog.title"
            :description="blog.description"
            :slug="blog.slug"
            :wdate="blog.date"
            :is-blog="true"
          />
        </div>
      </div>

      <!-- Contact Me -->
      <div
        class="flex items-start justify-between gap-10 md:gap-20 bg-secondary-925 rounded-md p-5"
      >
        <p>
          Ready to set your ideas ablaze?
          <NuxtLink to="/contact" class="text-clay-400">Contact Me</NuxtLink>
        </p>
      </div>
    </div>
  </div>
</template>
<script setup>
import blogDetails from "@/data/blogs/detail.js";
import projectDetails from "@/data/projects/detail.js";

useHead({
  title: "Poojan Bhalodiya",
  meta: [
    { property: "og:site_name", content: "Poojan Bhalodiya" },
    {
      name: "description",
      content: `I am Poojan Bhalodiya, a creative mind shaping ideas into reality.
          Specializing in Backend developer , I bring a unique perspective to
          every project. Explore my portfolio and let's collaborate on your next
          venture.`,
    },
    {
      name: "keywords",
      content: `poojan patel, Poojan Bhalodiya, Ahmedabad, Backend Developer, nodejs developer`,
    },
    {
      property: "image",
      content:
        "https://res.cloudinary.com/dhntmsget/image/upload/v1707051471/250X250ProfilePic.png",
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
      content: `I am Poojan Bhalodiya, a creative mind shaping ideas into reality.
          Specializing in Backend developer , I bring a unique perspective to
          every project. Explore my portfolio and let's collaborate on your next
          venture.`,
    },
    {
      property: "og:image",
      content:
        "https://res.cloudinary.com/dhntmsget/image/upload/v1707051471/250X250ProfilePic.png",
    },
    {
      name: "og:keywords",
      content: `poojan patel, Poojan Bhalodiya, Ahmedabad, Backend Developer`,
    },
  ],
});

const technologies = [
  {
    icon: "logos:nodejs-icon",
  },
  {
    icon: "skill-icons:expressjs-dark",
  },
  {
    icon: "devicon:mongodb",
  },
  {
    icon: "devicon:sqldeveloper",
  },
  {
    icon: "skill-icons:aws-dark",
  },
  {
    icon: "ri:more-fill",
  },
];

const blogToShow = blogDetails.sort(
  (a, b) => new Date(b.date) - new Date(a.date)
);

const projectToShow = projectDetails.sort(
  (a, b) => new Date(b.date) - new Date(a.date)
);
</script>

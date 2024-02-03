<template>
  <div class="flex items-center justify-center w-full py-8">
    <div class="container">
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
      <div class="gap-8 mt-14 flex">
        <!-- Image Here -->
        <div
          class="w-5/12 h-[450px] border flex items-center justify-center overflow-hidden"
        >
          <img
            src="https://images.unsplash.com/photo-1667831085395-edf105930c5e"
            alt="No Image Found"
            class="object-center"
          />
        </div>
        <!-- Intro Here -->
        <div class="w-7/12">
          <p class="text-orange-400 text-2xl font-semibold">Poojan Bhalodiya</p>
          <p class="font-semibold">Backend Developer</p>
          <p class="mt-5">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32.
          </p>

          <div class="mt-5 flex gap-3">
            <button
              @click=""
              class="border p-3 border-orange-300 rounded-md text-orange-300 hover:text-orange-400"
            >
              Contact Me
            </button>
            <button
              @click=""
              class="border p-3 border-orange-300 rounded-md text-orange-300 hover:text-orange-400"
            >
              Resume
            </button>
          </div>
        </div>
      </div>
      <!-- My Journey -->
      <div class="mt-16">
        <h2 class="font-semibold text-2xl text-center">My Interests</h2>
        <div class="flex mt-5 flex-wrap items-center justify-center">
          <div v-for="(item, i) in journey" :key="i">
            <div class="flex">
              <div class="">
                <Icon :name="item.icon" />
              </div>
              <div class="">
                <p>
                  {{ item.title }}
                </p>
                <p>
                  {{ item.subtitle }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- My Intrest -->
      <div class="mt-16">
        <h2 class="font-semibold text-2xl text-center">My Interests</h2>
        <div class="flex mt-5 flex-wrap justify-center">
          <div v-for="(item, i) in intrests" :key="i">
            {{ item }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

const intrests = [
  {
    icon: "fluent:xbox-controller-16-regular",
    label: "Video Games",
  },
  {
    icon: "headphone",
    label: "Music",
  },
  {
    icon: "bag",
    label: "Traveling",
  },
];

const journey = [
  {
    icon: "badge",
    title: "5 Years Job",
    subtitle: "Experience",
  },
  {
    icon: "presentation",
    title: "500+ Projects",
    subtitle: "Completed",
  },
  {
    icon: "tool",
    title: "2+ Product Work",
    subtitle: "Service Experiene",
  },
];
</script>

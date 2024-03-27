<template>
  <div class="flex items-center justify-center w-full py-8">
    <div class="container">
      <!-- Heading -->
      <div class="flex items-center justify-center flex-col">
        <h1 class="text-center text-4xl font-bold">Contact Me</h1>
        <p class="text-center mt-6 max-w-3xl text-lg">
          Ready to set your ideas ablaze? Whether you have a wild concept, a
          burning question, or just want to share your favorite book, I'm all
          ears. Let's spark something extraordinary!
        </p>
      </div>

      <!-- Contat Details -->
      <div class="flex items-center justify-center gap-3 mt-10 flex-wrap">
        <a
          v-for="(item, i) in contactus"
          :key="i"
          :href="getdoAction(item.is)"
          target="_blank"
          class="bg-secondary-900 rounded p-3 flex gap-3 items-center md:w-1/4 min-w-[300px] group pl-4"
        >
          <Icon
            :name="item.icon"
            class="text-clay-300 text-2xl h-10 w-10 border rounded-full p-2 border-clay-400 group-hover:bg-clay-400 group-hover:text-secondary-800"
          />
          <div class="text-start">
            <p class="font-semibold">
              {{ item.label }}
            </p>
            <p>
              {{ item.content }}
            </p>
          </div>
        </a>
      </div>

      <!-- Connect with Me Across Social Channels -->
      <div class="flex justify-center flex-col items-center mt-14 mx-4">
        <p class="text-2xl font-bold text-center flex items-center gap-3">
          <span class="hidden md:flex">
            <Icon name="tabler:social" class="" />
          </span>
          Connect with Me Across Social Channels
        </p>
        <div class="mt-8 space-y-2">
          <button
            v-for="(item, i) in otherSocials"
            :key="i"
            class="flex items-center justify-between group text-xl bg-secondary-800 p-2 px-4 rounded w-60 hover:ring-1 hover:ring-clay-400"
            @click="otherSocialsAction(item.link)"
          >
            <div class="flex gap-4 items-center">
              <Icon :name="item.icon" class="group-hover:text-clay-400" />
              <p class="group-hover:text-clay-400">{{ item.label }}</p>
            </div>
            <span
              class="text-transparent group-hover:text-secondary-500 flex items-center"
            >
              <Icon name="ion:open-outline" />
            </span>
          </button>
        </div>
      </div>

      <!-- Get In Touch -->
      <div class="flex justify-center flex-col items-center mt-14 mx-4">
        <p class="text-2xl font-bold text-center flex items-center gap-3">
          <Icon name="ant-design:form-outlined" />
          Get In Touch
        </p>
        <form
          @submit.prevent="submitForm"
          class="gap-4 flex items-center justify-center flex-col max-w-lg mt-10"
        >
          <div
            class="flex w-full items-center justify-center flex-wrap md:flex-nowrap gap-4 md:gap-0"
          >
            <div class="w-full flex justify-center">
              <input
                type="text"
                class="bg-transparent border border-secondary-400 rounded-md p-1.5 selection:border-secondary-300 w-full capitalize"
                placeholder="Name"
                :disabled="loading"
                v-model="formData.name"
                required
              />
            </div>
            <div class="w-full flex justify-center md:ml-4">
              <input
                class="bg-transparent border border-secondary-400 rounded-md p-1.5 selection:border-secondary-300 w-full"
                type="email"
                placeholder="Email"
                :disabled="loading"
                v-model="formData.email"
                required
              />
            </div>
          </div>
          <div class="w-full flex justify-center">
            <input
              class="bg-transparent border border-secondary-400 rounded-md p-1.5 selection:border-secondary-300 w-full"
              type="text"
              placeholder="Subject"
              :disabled="loading"
              v-model="formData.subject"
              required
            />
          </div>
          <div class="w-full flex justify-center">
            <textarea
              placeholder="Message"
              v-model="formData.message"
              :disabled="loading"
              class="bg-transparent border border-secondary-400 rounded-md p-1.5 selection:border-secondary-300 w-full"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            class="bg-secondary-900 p-2 border border-secondary-400 rounded-md hover:bg-secondary-800 font-semibold hover:ring-2"
            :disabled="loading"
          >
            <Icon v-if="loading" name="line-md:loading-loop" />
            Send Message
          </button>
          <div
            class="flex items-center justify-center gap-2 mt-5"
            v-if="isSubmitted"
          >
            <Icon
              name="material-symbols:mark-email-read-outline-rounded"
              class="text-green-500 h-5 w-5"
            />
            <p class="text-green-500">Form Submitted Successfully</p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { getFirestore, collection, addDoc } from "firebase/firestore";

useHead({
  title: "Contact Me | Poojan Bhalodiya",
  meta: [
    { property: "og:site_name", content: "Contact Me | Poojan Bhalodiya" },
    {
      name: "description",
      content: `Connect with me effortlessly! Explore collaboration opportunities and reach out for a conversation on my Contact Me page, where possibilities meet communication`,
    },
    {
      name: "keywords",
      content: `poojan patel, Poojan Bhalodiya, Ahmedabad, Backend Developer, nodejs developer, contact, , Contact me, social linkes, Linkedin', email, location`,
    },
    {
      property: "image",
      content:
        "https://res.cloudinary.com/dhntmsget/image/upload/v1707051471/250X250ProfilePic.png",
    },
    { hid: "og:type", property: "og:type", content: "website" },
    {
      property: "og:url",
      content: `https://poojan-bhalodiya.vercel.app/contact`,
    },
    {
      property: "og:title",
      content: `Contact Me | Poojan Bhalodiya`,
    },
    {
      property: "og:description",
      content: `Connect with me effortlessly! Explore collaboration opportunities and reach out for a conversation on my Contact Me page, where possibilities meet communication`,
    },
    {
      property: "og:image",
      content:
        "https://res.cloudinary.com/dhntmsget/image/upload/v1707051471/250X250ProfilePic.png",
    },
    {
      name: "og:keywords",
      content: `poojan patel, Poojan Bhalodiya, Ahmedabad, Backend Developer, nodejs developer, contact, , Contact me, social linkes, Linkedin', email, location`,
    },
  ],
});

const db = getFirestore();

const contactus = [
  {
    icon: "mdi:phone",
    label: "Call Me",
    content: "+91 7096 215026",
    is: "call",
  },
  {
    icon: "mdi:email",
    label: "E-Mail",
    content: "poojanbhalodiya02@gmail.com",
    is: "mail",
  },
  {
    icon: "mdi:location",
    label: "Location",
    content: "Ahmedabad Gujrat",
    is: "latlong",
  },
];

const otherSocials = [
  {
    icon: "mdi:linkedin",
    label: "Linkedin",
    link: "https://www.linkedin.com/in/poojan-bhalodiya",
  },
  {
    icon: "simple-icons:linktree",
    label: "Linktree",
    link: "https://linktr.ee/PoojanBhalodiya",
  },
  {
    icon: "mdi:github",
    label: "Github",
    link: "https://github.com/poojan-bhalodiya",
  },
  {
    icon: "mdi:medium",
    label: "Medium",
    link: "https://medium.com/@poojanbhalodiya2003",
  },
];
const loading = ref(false);
const isSubmitted = ref(false);
const formData = ref({
  name: "",
  email: "",
  subject: "",
  message: "",
});

async function submitForm() {
  loading.value = true;
  isSubmitted.value = false;
  console.log("Form submitted with data:", formData.value);
  try {
    const docRef = await addDoc(collection(db, "contacts"), {
      name: formData.value.name,
      email: formData.value.email,
      subject: formData.value.subject,
      message: formData.value.message,
    });
    if (docRef?.id) {
      setTimeout(async () => {
        loading.value = false;
        isSubmitted.value = true;
      }, 2000);
    } else {
      loading.value = false;
    }
  } catch (e) {
    console.error("Error submitting form: ", e);
  }
  formData.value = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };
}

function getdoAction(is) {
  switch (is) {
    case "call":
      // window.open("https://api.whatsapp.com/send?phone=917096215026", "_blank");
      return "https://api.whatsapp.com/send?phone=917096215026";
    // break;
    case "mail":
      // window.open("mailto:poojanbhalodiya02@gmail.com", "_blank");
      return "mailto:poojanbhalodiya02@gmail.com";
    // break;
    case "latlong":
      // window.open(
      //   "https://www.google.com/maps/place/Ahmedabad,+Gujarat",
      //   "_blank"
      // );
      // break;
      return "https://www.google.com/maps/place/Ahmedabad,+Gujarat";
  }
}
function otherSocialsAction(link) {
  window.open(link, "_blank");
}
</script>

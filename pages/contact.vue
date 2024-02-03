<template>
  <div class="flex items-center justify-center w-full py-8">
    <div class="container">
      <!-- Heading -->
      <div>
        <h1 class="text-center text-4xl font-bold">Contact Me</h1>
      </div>

      <!-- COntat Details -->
      <div>
        <!-- Call Me -->
        <div></div>
      </div>

      <!-- Get In Touch -->
      <div class="flex justify-center flex-col items-center">
        <p class="text-2xl font-bold text-center">Get In Touch</p>
        <form
          @submit.prevent="submitForm"
          class="gap-4 flex items-center justify-center flex-col max-w-lg"
        >
          <div class="flex w-full items-center justify-center">
            <div class="w-full flex justify-center">
              <input
                type="text"
                class="bg-transparent border border-secondary-400 rounded-md p-1.5 selection:border-secondary-300 w-full capitalize"
                placeholder="Name"
                v-model="formData.name"
                required
              />
            </div>
            <div class="w-full flex justify-center ml-4">
              <input
                class="bg-transparent border border-secondary-400 rounded-md p-1.5 selection:border-secondary-300 w-full"
                type="email"
                placeholder="Email"
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
              v-model="formData.subject"
              required
            />
          </div>
          <div class="w-full flex justify-center">
            <textarea
              placeholder="Message"
              v-model="formData.message"
              class="bg-transparent border border-secondary-400 rounded-md p-1.5 selection:border-secondary-300 w-full"
              required
            ></textarea>
          </div>
          <button type="submit" class="bg-secondary-900 p-2 border border-secondary-400 ">
            <Icon name="line-md:loading-loop" />
            Send Message
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const loading = ref(false);
const formData = ref({
  name: "",
  email: "",
  subject: "",
  message: "",
});

function submitForm() {
  loading.value = true;
  console.log("Form submitted with data:", this.formData);
  setTimeout(() => {
    formData.value = {
      name: "",
      email: "",
      subject: "",
      message: "",
    };
  }, 2000);
  loading.value = false;
}
</script>

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
                :disabled="loading"
                v-model="formData.name"
                required
              />
            </div>
            <div class="w-full flex justify-center ml-4">
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

const db = getFirestore();
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
</script>

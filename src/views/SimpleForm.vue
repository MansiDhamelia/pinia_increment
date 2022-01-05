<template>
  <h1 class="font-bold">Create an event</h1>

  <label for="">Select a category: </label>
  <select class="border-2 my-1" v-model="event.categoey">
    <option
      v-for="option in categories"
      :value="option"
      :key="option"
      :selected="option === event.category"
    >
      {{ option }}
    </option>
  </select>

  <h2 class="font-bold">Name and describe your event</h2>
  <BaseInput label="Title" type="text" />

  <BaseInput label="Description" type="text" />
  <h2 class="font-bold">Where is your event?</h2>

  <BaseInput v-model="event.location" label="Location" type="text" />

  <h3 class="font-bold">Are pets allowed?</h3>
  <div>
    <BaseRadio :value="1" label="Yes" name="pets" v-model="event.pets" />
  </div>
  <div>
    <BaseRadio :value="0" label="No" name="pets" v-model="event.pets" />
  </div>
  <h1 class="font-bold">EXTRAS:</h1>
  <div class="">
    <BaseCheckBox label="Catering" />
  </div>
  <div>
    <BaseCheckBox label="Music" />
  </div>
  <div class="flex flex-row gap-3 justify-center">
    <BaseButton type="button"> Submit </BaseButton>
    <BaseButton type="button" @click="open"> View </BaseButton>
    <EventModal />
  </div>
</template>

<script setup>
import BaseInput from "../components/BaseInput.vue";
import BaseButton from "../components/BaseButton.vue";
import EventModal from "../components/modal_component/EventModal.vue";
import BaseCheckBox from "../components/BaseCheckBox.vue";
import BaseRadio from "../components/BaseRadio.vue";
import { ref, reactive } from "vue";
import { useStore } from "../store/counter";

const store = useStore();
const { close, open } = store;
const categories = ref([
  "nature",
  "animal welfare",
  "housing",
  "education",
  "food",
]);
const event = reactive([
  {
    category: "",
    title: "",
    description: "",
    location: "",
    pets: 1,
    extras: {
      catering: false,
      music: true,
    },
  },
]);
</script>

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
    <input type="radio" v-model="event.pets" :value="1" name="pets" />
    <label>Yes</label>
  </div>
  <div class="">
    <input type="radio" v-model="event.pets" :value="0" name="pets" />
    <label>No</label>
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
    catyegory: "",
    title: "",
    description: "",
    location: "",
    pets: 1,
  },
]);
</script>

<template>
  <div class="flex items-center justify-center">
    <div class="flex  items-center h-5">
      <input type="checkbox" :id="id" :checked="modelValue" />
    </div>
    <div class="ml-3 text-sm">
      <label :for="id" v-if="label"> {{ label }}</label>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  label: {
    type: String,
    default: "",
  },
  modelValue: {
      type: Boolean,
      default: false
  }
});
</script>

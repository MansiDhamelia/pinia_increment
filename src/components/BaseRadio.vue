<template>
  <div>
    <input type="radio" :value="value" :checked="modelValue === value" v-bind="$attrs"   @change="$emit('update:modelValue', value)" />
    <label v-if="label" class="ml-1"> {{ label }}</label>
  </div>
</template>

<script setup>
const props = defineProps({
  label: {
    type: String,
    default: "",
  },
  modelValue: {
    type: [String, Number],
    default: "",
  },
  value: {
    type: [String, Number],
    required: true,
  },
});
</script>

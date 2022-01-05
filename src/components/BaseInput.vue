<template>
  <div>
    <label v-if="label" class="mr-1"> {{ label }} </label>
    <input
      v-bind="$attrs"
    
      :placeholder="label"
      class="p-1 h-8 w-auto rounded-lg my-1 border-2  "
   
    />
  </div>
</template>

<script setup>
console.log("baseinput");
const props = defineProps({
  label: {
    type: String,
    default: "",
  },
  modelValue: {
    type: [String, Number],
    default: "",
  },
});
</script>



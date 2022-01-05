<template>
  <TransitionRoot as="template" appear :show="store.isOpen">
    <Dialog as="div" @close="close">
      <div
        class="flex items-end justify-center min-h-screen min-h-screen-ios px-4 text-center sm:block sm:px-2"
      >
        <TransitionChild
          as="template"
          enter="ease-out duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="ease-in duration-200"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <DialogOverlay
            class="fixed inset-0 transition-opacity bg-gray-700 bg-opacity-25"
          />
        </TransitionChild>

        <!-- <span class="inline-block h-screen align-middle" aria-hidden="true">
          &#8203;
        </span> -->

        <TransitionChild
          as="template"
          enter="ease-out duration-300"
          enter-from="opacity-0 translate-y-4"
          enter-to="opacity-100 translate-y-0"
          leave="ease-in duration-200"
          leave-from="opacity-100 translate-y-0 "
          leave-to="opacity-0 translate-y-4 sm:translate-y-0"
        >
          <div
            class="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl"
          >
            <DialogTitle
              as="h3"
              class="text-lg font-medium leading-6 text-gray-900"
            >
              successful
            </DialogTitle>

            <div class="mt-2">
              <BaseInput label="Name" type="text" />
              <BaseInput label="Description" type="text" />
              <BaseButton type="button"> Save Changes </BaseButton>

            </div>
            <BaseButton type="button" @click="close"> Close </BaseButton>
          </div>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import {
  Dialog,
  DialogOverlay,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { watchEffect } from "vue";
import BaseButton from "../BaseButton.vue";
import { ref } from "vue";
import { useStore } from "../../store/counter";
import BaseInput from "../BaseInput.vue";

const store = useStore();
const { close, open } = store;

// const emit = defineEmits(["close", "open"]);
// watchEffect(() => {
//   if (props.show) {
//     emit("open", props.show);
//   }
// });
</script>

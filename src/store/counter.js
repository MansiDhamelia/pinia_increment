import { defineStore } from "pinia";

export const useStore = defineStore("main", {
  state: () => {
    return {
      counter: 0,
      name: "abcd",
      isOpen: true
    };
  },
  getters: {
    doubleCount: (state) => state.counter * 2,
    doublePlusOne: (state) => state.counter * 2 + 1,

    // getUserById: (state) => {
    //   return (userId) => state.users.find((user) => user.id === userId);
    // },
  },
  actions: {
    increment() {
      this.counter++;
    },
    randomizeCounter() {
      this.counter = Math.round(100 * Math.random());
    },
    close(){
      this.isOpen = false
    },
    open(){
      this.isOpen = true
    }
  },
});

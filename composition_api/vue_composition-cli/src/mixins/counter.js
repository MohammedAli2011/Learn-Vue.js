import { ref } from "vue";

let counter = ref(0);

let increase = () => {
  counter.value++;
};

let decrease = () => {
  if (counter.value > 0) {
    counter.value--;
  }
};

export default { counter, decrease, increase };

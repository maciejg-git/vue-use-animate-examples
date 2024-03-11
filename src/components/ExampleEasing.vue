<template>
  <div ref="box" class="h-10 w-10 bg-gray-400"></div>
  <select v-model="currentEasing" class="ml-auto">
    <option v-for="f in easing" :value="f">{{ f.name }}</option>
  </select>
</template>

<script setup>
import { ref, onMounted } from "vue";
import useAnimate from "../composition/use-animate";
import * as easing from "../easing";
import { translateX } from "../transforms.js";

let box = ref(null);

let currentEasing = ref(easing.linear)

let animate = useAnimate();

onMounted(() => {
/* CUT START */
  animate.set({
    draw: ([track]) => {
      track.setTiming(currentEasing.value)
      track.update();
      box.value.style.transform = translateX(track.progress, "px");
      if (track.isComplete()) track.next()
    },
    frames: [
      [{ duration: 2000, remap: [0, 200] }]
    ],
    repeat: true,
  });
/* CUT END */
});

defineExpose({ name: "exampleEasing", animate });
</script>

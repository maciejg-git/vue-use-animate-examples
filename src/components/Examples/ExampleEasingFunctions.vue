<template>
  <div ref="element" class="h-10 w-10 bg-gray-400"></div>
  <select v-model="currentEasing" class="ml-auto">
    <option v-for="f in easing" :value="f">{{ f.name }}</option>
  </select>
</template>

<script setup>
import { ref, onMounted } from "vue";
import useAnimate from "@/composition/use-animate";
import * as easing from "@/easing";
import { translateX, scale } from "@/transforms.js";

let element = ref(null);

let currentEasing = ref(easing.linear)

let animate = useAnimate();

onMounted(() => {
/* CUT START */
  animate.set({
    draw: ([track]) => {
      track.setTiming(currentEasing.value)
      track.update();
      if (track.frameIndex === 0) {
        element.value.style.transform = translateX(track.progress, "px");
        track.$x = track.progress
      }
      if (track.frameIndex === 1) {
        element.value.style.transform = translateX(track.$x, "px") + scale(track.progress, track.progress);
      }
      if (track.isComplete()) track.next()
    },
    frames: [
      [
        { duration: 2000, remap: [0, 200] },
        { duration: 2000, remap: [1, 0.5] },
      ]
    ],
    repeat: true,
  });
/* CUT END */
});

defineExpose({ name: "exampleEasingFunctions", animate });
</script>

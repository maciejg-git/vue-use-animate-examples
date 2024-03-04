<template>
  <div class="flex flex-col gap-y-1">
    <div v-for="el in 3" ref="elements" class="h-4 w-4 bg-gray-400"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import useAnimate from "../composition/use-animate";
import * as easing from "../easing";
import { translateX, rotate, scale } from "../transforms.js";

let elements = ref([]);

let animate = useAnimate();

onMounted(() => {
/* CUT START */
  animate.set({
    draw: ([track]) => {
      elements.value.forEach((element, index) => {
        track.update(index * 200);
        if (track.frameIndex === 0) {
          element.style.transform = translateX(track.progress, "px")
        }
        if (track.frameIndex === 1) {
          element.style.transform = rotate(track.progress, "deg")
        }
        if (track.frameIndex === 2) {
          element.style.transform = scale(track.progress, track.progress)
        }
      })
      if (track.isAllComplete()) track.next()
    },
    frames: [
      [
        { duration: 1500, timing: easing.easeOutBounce, remap: [0, 200] },
        { duration: 500, timing: easing.easeInOutQuad, remap: [0, 180] },
        { duration: 500, timing: easing.easeInOutQuad, remap: [1, 0.5] },
      ]
    ],
  });
/* CUT END */
});

defineExpose({ name: "exampleMultipleFrames", animate });
</script>

<template>
  <div ref="element" class="h-10 w-10 bg-gray-400"></div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import useAnimate from "../composition/use-animate";
import * as easing from "../easing";
import { translateX } from "../transforms.js";

let element = ref(null);

let animate = useAnimate();

onMounted(() => {
/* CUT START */
  animate.set({
    draw: ([track]) => {
      track.update();
      element.value.style.transform = translateX(track.progress, "px");
    },
    frames: [
      [
        {
          duration: 1000,
          timing: easing.easeInOutQuad,
          remap: [0, 200],
          reverse: true,
        }
      ]
    ],
  });
/* CUT END */
});

defineExpose({ name: "exampleTrackUpdateReverse", animate });
</script>

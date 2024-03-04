<template>
  <div ref="box" class="absolute h-10 w-10 bg-gray-400"></div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import useAnimate from "../composition/use-animate";
import * as easing from "../easing";
import { translateX } from "../transforms.js";

let box = ref(null);

let animate = useAnimate();

onMounted(() => {
/* CUT START */
  animate.set({
    draw: ([track]) => {
      track.update(1000);
      box.value.style.transform = translateX(track.progress, "px");
    },
    frames: [
      [{ duration: 1000, remap: [0, 200] }]
    ],
  });
/* CUT END */
});

defineExpose({ name: "exampleTrackUpdateDelay", animate });
</script>

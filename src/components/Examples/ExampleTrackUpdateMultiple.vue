<template>
  <div class="flex flex-col gap-y-1">
    <div v-for="el in 3" ref="elements" class="h-4 w-4 bg-gray-400"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import useAnimate from "@/composition/use-animate";
import * as easing from "@/easing";
import { translateX } from "@/transforms.js";

let elements = ref(null);

let animate = useAnimate();

onMounted(() => {
/* CUT START */
  animate.set({
    draw: ([track]) => {
      elements.value.forEach((element, index) => {
        track.update(index * 300);
        element.style.transform = translateX(track.progress, "px")
      })
    },
    frames: [
      [{ duration: 1000, timing: easing.easeInOutQuad, remap: [0, 200] }]
    ],
  });
/* CUT END */
});

defineExpose({ name: "exampleTrackUpdateMultiple", animate });
</script>

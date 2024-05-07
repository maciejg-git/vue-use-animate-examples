<template>
  <div class="flex gap-x-[1px]">
    <div
      v-for="box in 10"
      ref="bars"
      class="h-[30px] w-[5px] origin-[50%_50%] bg-gray-400"
    ></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import useAnimate from "@/composition/use-animate";
import * as easing from "@/easing";
import { scaleY } from "@/transforms.js";

let bars = ref([]);

let animate = useAnimate();

onMounted(() => {
/* CUT START */
  animate.set({
    timing: easing.easeInOutQuad,
    draw: ([track]) => {
      bars.value.forEach((i, index) => {
        track.update(40 * index);
        i.style.transform = scaleY(1 - Math.sin(track.timeFraction * 3.14));
      });
      if (track.isAllComplete()) track.next();
    },
    frames: [
      [{ duration: 1000 }]
    ],
    // remap: [0, 1],
    repeat: true,
  });
/* CUT END */
});

defineExpose({ name: "exampleBars", animate });
</script>

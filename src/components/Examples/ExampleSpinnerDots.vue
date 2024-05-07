<template>
  <div
    v-for="box in 9"
    ref="spinner"
    class="absolute h-[4px] w-[4px] origin-[800%_0] bg-gray-400"
  ></div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import useAnimate from "@/composition/use-animate";
import * as easing from "@/easing";
import { rotate } from "@/transforms.js";

let spinner = ref([]);

let animate = useAnimate();

onMounted(() => {
/* CUT START */
  animate.set({
    timing: easing.easeInOutQuad,
    draw: ([track, track2]) => {
      track2.update();
      spinner.value.forEach((i, index) => {
        track.setRemap([(9 - index) * 20, 360 + (9 - index) * 20]);
        track.reverse = index % 2;
        track.update(100 * index);
        i.style.transform = rotate(track.progress + track2.progress, "deg");
      });
      if (track.isAllComplete()) track.next();
      if (track2.isAllComplete()) track2.next();
    },
    frames: [
      [{ duration: 2000 }],
      [{ duration: 4000, timing: (t) => t, remap: [0, 360] }],
    ],
    // repeat: true,
  });
/* CUT END */
});

defineExpose({ name: "exampleSpinnerDots", animate });
</script>

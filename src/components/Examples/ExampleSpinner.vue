<template>
  <div class="flex w-10 items-center justify-center">
    <div ref="spinnerframe" class="spinner"></div>
    <div ref="spinnerframe2" class="spinner2"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import useAnimate from "@/composition/use-animate";
import * as easing from "@/easing";
import { rotate } from "@/transforms.js";

let spinnerframe = ref(null);
let spinnerframe2 = ref(null);

let animate = useAnimate();

onMounted(() => {
/* CUT START */
  animate.set({
    timing: easing.easeInOutQuad,
    draw: ([track, track2]) => {
      if (track.frameStarted) {
        track.frame.duration = animate.getRandomInt(600, 1400);
        let from = track.$to % 360 || 0;
        // track.$to = track.frame.cycles % 2 ? track.$from + track.$deg : track.$from - track.$deg
        track.$to = from + animate.getRandomInt(270, 480);
        track.remap = [from, track.$to];
      }
      if (track2.frameStarted) {
        track2.frame.duration = animate.getRandomInt(600, 1400);
        let from = track2.$to % 360 || 0;
        // track2.$to = track2.frame.cycles % 2 ? track2.$from + track2.$deg : track2.$from - track2.$deg
        track2.$to = from + animate.getRandomInt(270, 480);
        track2.remap = [from, track2.$to];
      }
      track.update();
      spinnerframe.value.style.transform = rotate(track.progress, "deg");

      track2.update();
      spinnerframe2.value.style.transform = rotate(track2.progress, "deg");

      if (track.isAllComplete()) track.next();
      if (track2.isAllComplete()) track2.next();
    },
    frames: [
      [{ duration: 1000, remap: [0, 360], delay: 600 }],
      [{ duration: 1000, remap: [0, 360], delay: 300 }],
    ],
    repeat: true,
  });
/* CUT END */
});

defineExpose({ name: "exampleSpinner", animate });
</script>

<style scoped>
.spinner {
  @apply absolute my-2 h-[40px] w-[40px] rounded-full border-2 border-gray-400 border-t-transparent bg-transparent;
}
.spinner2 {
  @apply absolute my-2 h-[30px] w-[30px] rounded-full border-2 border-gray-400 border-t-transparent bg-transparent;
}
</style>

<template>
  <div class="flex flex-col">
    <div ref="box" class="h-10 w-10 bg-gray-400"></div>
    <div class="flex mt-4 gap-x-2">
      <button class="btn" @click="animate.play()">play</button>
      <button class="btn" @click="animate.stop()">stop</button>
      <button class="btn" @click="animate.pause()">paused</button>
      <button class="btn" @click="animate.restart()">restart</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import useAnimate from "@/composition/use-animate";
import * as easing from "@/easing";
import { translateX } from "@/transforms.js";

let box = ref(null);

let animate = useAnimate();

onMounted(() => {
/* CUT START */
  animate.set({
    draw: ([track]) => {
      track.update();
      box.value.style.transform = translateX(track.progress, "px");
      if (track.isComplete()) track.next()
    },
    frames: [
      [{ duration: 1000, timing: easing.linear, remap: [0, 200], alternate: true }]
    ],
    repeat: true,
  });
/* CUT END */
});

defineExpose({ name: "exampleAnimationControls", animate });
</script>

<style scoped>
.btn {
  @apply text-gray-400 underline py-1 pr-4 rounded-md mr-2 font-semibold hover:border-gray-300 hover:text-gray-300
}
</style>

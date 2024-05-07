<template>
  <div ref="element" class="h-10 w-10 bg-gray-400"></div>
  <ul class="ml-auto">
    <li v-for="(value, key) in events" class="text-gray-300 font-mono">
      {{ key }}: {{ value }}
    </li>
  </ul>
</template>

<script setup>
import { ref, onMounted, reactive } from "vue";
import useAnimate from "@/composition/use-animate";
import * as easing from "@/easing";
import { translateX, rotate } from "@/transforms.js";

let element = ref(null);

let events = reactive({
  initialDraw: 0,
  animationStarted: 0,
  trackStarted: 0,
  frameStarted: 0,
})

let animate = useAnimate();

onMounted(() => {
/* CUT START */
  animate.set({
    draw: ([track], animation) => {
      if (animation.initialDraw) events.initialDraw++
      if (animation.animationStarted) events.animationStarted++
      if (track.trackStarted) events.trackStarted++
      if (track.frameStarted) events.frameStarted++

      track.update();

      if (track.frameIndex === 0) {
        element.value.style.transform = translateX(track.progress, "px");
        track.$x = track.progress
      }
      if (track.frameIndex === 1) {
        element.value.style.transform = 
          translateX(track.$x, "px") + 
          rotate(track.progress, "deg");
      }

      if (track.isComplete()) track.next()
    },
    frames: [
      [
        { duration: 1000, timing: easing.easeInOutQuad, remap: [0, 200] },
        { duration: 800, timing: easing.easeInOutQuad, remap: [0, 180] },
      ]
    ],
    repeat: true,
  });
/* CUT END */
});

defineExpose({ name: "exampleEvents", animate });
</script>

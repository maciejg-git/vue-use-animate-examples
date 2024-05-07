<template>
  <div class="flex flex-col">
    <div ref="box" class="h-10 w-10 bg-gray-400"></div>
    <div ref="box2" class="h-10 w-10 bg-green-400"></div>
    <div ref="box3" class="h-10 w-10 bg-red-400"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import useAnimate from "@/composition/use-animate";
import * as easing from "@/easing";
import { translateX, translateY } from "@/transforms.js";

let box = ref(null);
let box2 = ref(null);
let box3 = ref(null);

let animate = useAnimate();

onMounted(() => {
/* CUT START */
  animate.set({
    draw: ([track], animation) => {
      if (animation.initialDraw) {
        track.$x = 0
        track.$y = 0
      }
      if (track.frameStarted) {
        track.frame.duration = animate.getRandomInt(200, 2000)
        // track.remap = [animate.getRandomInt(0, 100), animate.getRandomInt(200, 400)]
        track.$xFrom = track.$x
        track.$yFrom = track.$y
        track.$x = animate.getRandomInt(0, 100)
        track.$y = animate.getRandomInt(0, 100)
        track.$xTo = track.$x - track.$xFrom
        track.$yTo = track.$y - track.$yFrom
      }
      track.update();
      box.value.style.transform = translateX(track.$xFrom + track.progress * track.$xTo, "px") + translateY(track.$yFrom + track.progress * track.$yTo, "px");
      if (track.isComplete()) track.next()
    },
    frames: [
      [{ duration: 1000 }],
      [{ duration: 1000 }],
      [{ duration: 1000 }],
    ],
    repeat: true,
  });
/* CUT END */
});

defineExpose({ name: "exampleShapes", animate });
</script>

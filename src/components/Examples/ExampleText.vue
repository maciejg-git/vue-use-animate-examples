<template>
  <div><span v-for="w in text" ref="textElements" style="opacity: 0" class="text-gray-400">{{ w }}</span></div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import useAnimate from "@/composition/use-animate";
import * as easing from "@/easing";
import { translateX } from "@/transforms.js";

let box = ref(null);

let animate = useAnimate();

let text = "text animate"

text = text.split(/(?= )/g)

let textElements = ref([])

onMounted(() => {
/* CUT START */
  animate.set({
    draw: ([track], animation) => {
      if (animation.initialDraw) {
        track.$index = 0
      }
      track.update();
      textElements.value[track.$index].style.opacity = track.timeFraction
      if (track.isComplete()) {
        track.$index++
        track.next()
      }
    },
    frames: [
      textElements.value.map((i) => ({ duration: 1000 }))
    ],
  });
/* CUT END */
animate.play()
});

defineExpose({ name: "exampleTrackUpdate", animate });
</script>

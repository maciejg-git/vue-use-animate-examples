<template>
  <div ref="box" class="h-10 w-10 bg-gray-400"></div>
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
      [{ duration: 1000, timing: easing.easeOutQuad, remap: [0, 200] }]
    ],
    repeat: true,
  });
/* CUT END */
});

defineExpose({ name: "exampleAnimationRepeat", animate });
</script>

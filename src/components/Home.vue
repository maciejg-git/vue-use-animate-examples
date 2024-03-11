<template>
  <div class="sticky flex items-center top-0 px-12 h-12 text-xl text-gray-300 font-bold shadow-lg bg-[#212121] z-50">vue-use-animate examples</div>
  <!-- <div class="flex h-[400px] flex-col"> -->
  <!--   <div -->
  <!--     v-for="box in 10" -->
  <!--     ref="boxRefs" -->
  <!--     class="bg-primary-400 relative my-2 h-[40px] w-[40px] bg-gray-300" -->
  <!--   ></div> -->
  <!-- </div> -->

<h4 class="ml-12">
  Track update
</h4>
  
<h5 class="ml-12">
  timeFraction property
</h5>
<div class="flex mx-6">
  <div class="basis-1/2 px-6">
    <div class="example" @click="examples.exampleTrackUpdate.restart()">
      <example-track-update :ref="addExample"></example-track-update>
    </div>
    <div class="text-gray-300">
      <example-track-update-md></example-track-update-md>
    </div>
  </div>
  <description class="basis-1/2 px-6" name="ExampleTrackUpdate"></description>
</div>

<h5 class="ml-12">
  progress property
</h5>
<div class="flex mx-6">
  <div class="basis-1/2 px-6">
    <div class="example" @click="examples.exampleTrackUpdateProgress.restart()">
      <example-track-update-progress :ref="addExample"></example-track-update-progress>
    </div>
    <div class="text-gray-300">
      <example-track-update-progress-md></example-track-update-progress-md>
    </div>
  </div>
  <description class="basis-1/2 px-6" name="ExampleTrackUpdateProgress"></description>
</div>

<h5 class="ml-12">
  Update delay
</h5>
<div class="flex mx-6">
  <div class="basis-1/2 px-6">
    <div class="example" @click="examples.exampleTrackUpdateDelay.restart()">
      <example-track-update-delay :ref="addExample"></example-track-update-delay>
    </div>
    <div class="text-gray-300">
      <example-track-update-delay-md></example-track-update-delay-md>
    </div>
  </div>
  <description class="basis-1/2 px-6" name="ExampleTrackUpdateDelay"></description>
</div>

<h5 class="ml-12">
  Reversed progress
</h5>
<div class="flex mx-6">
  <div class="basis-1/2 px-6">
    <div class="example" @click="examples.exampleTrackUpdateReverse.restart()">
      <example-track-update-reverse :ref="addExample"></example-track-update-reverse>
    </div>
    <div class="text-gray-300">
      <example-track-update-reverse-md></example-track-update-reverse-md>
    </div>
  </div>
  <description class="basis-1/2 px-6" name="ExampleTrackUpdateReverse"></description>
</div>

<h5 class="ml-12">
  Multiple update calls
</h5>
<div class="flex mx-6">
  <div class="basis-1/2 px-6">
    <div class="example" @click="examples.exampleTrackUpdateMultiple.restart()">
      <example-track-update-multiple :ref="addExample"></example-track-update-multiple>
    </div>
    <div class="text-gray-300">
      <example-track-update-multiple-md></example-track-update-multiple-md>
    </div>
  </div>
  <description class="basis-1/2 px-6" name="ExampleTrackUpdateMultiple"></description>
</div>

<h5 class="ml-12">
  Multiple frames
</h5>
<div class="flex mx-6">
  <div class="basis-1/2 px-6">
    <div class="example" @click="examples.exampleMultipleFrames.restart()">
      <example-multiple-frames :ref="addExample"></example-multiple-frames>
    </div>
    <div class="text-gray-300">
      <example-multiple-frames-md></example-multiple-frames-md>
    </div>
  </div>
  <description class="basis-1/2 px-6" name="ExampleMultipleFrames"></description>
</div>

<h5 class="ml-12">
  Storing and sharing data
</h5>
<div class="flex mx-6">
  <div class="basis-1/2 px-6">
    <div class="example" @click="examples.exampleTrackData.restart()">
      <example-track-data :ref="addExample"></example-track-data>
    </div>
    <div class="text-gray-300">
      <example-track-data-md></example-track-data-md>
    </div>
  </div>
  <description class="basis-1/2 px-6" name="ExampleTrackData"></description>
</div>

<h5 class="ml-12">
  Easing functions
</h5>
<div class="flex mx-6">
  <div class="basis-1/2 px-6">
    <div class="example" @click="examples.exampleEasing.restart()">
      <example-easing :ref="addExample"></example-easing>
    </div>
    <div class="text-gray-300">
      <example-track-update-md></example-track-update-md>
    </div>
  </div>
  <description class="basis-1/2 px-6" name="ExampleEasing"></description>
</div>

<h5 class="ml-12">
  Animation and track events
</h5>
<div class="flex mx-6">
  <div class="basis-1/2 px-6">
    <div class="example" @click="examples.exampleEvents.restart()">
      <example-events :ref="addExample"></example-events>
    </div>
    <div class="text-gray-300">
      <example-events-md></example-events-md>
    </div>
  </div>
  <description class="basis-1/2 px-6" name="ExampleEvents"></description>
</div>

<h4 class="ml-12">
  Animation
</h4>

<h5 class="ml-12">
  Animation repeat
</h5>
<div class="flex mx-6">
  <div class="basis-1/2 px-6">
    <div class="example" @click="examples.exampleAnimationRepeat.restart()">
      <example-animation-repeat :ref="addExample"></example-animation-repeat>
    </div>
    <div class="text-gray-300">
      <example-animation-repeat-md></example-animation-repeat-md>
    </div>
  </div>
  <description class="basis-1/2 px-6" name="ExampleAnimationRepeat"></description>
</div>

<h5 class="ml-12">
  Animation controls
</h5>
<div class="flex mx-6">
  <div class="basis-1/2 px-6">
    <div class="example">
      <example-animation-controls :ref="addExample"></example-animation-controls>
    </div>
    <div class="text-gray-300">
      <example-animation-controls-md></example-animation-controls-md>
    </div>
  </div>
  <description class="basis-1/2 px-6" name="ExampleAnimationControls"></description>
</div>

<div class="flex mx-6">
  <div class="basis-1/2 px-6">
    <div class="example" @click="examples.exampleSpinnerDots.restart()">
      <example-spinner-dots :ref="addExample"></example-spinner-dots>
    </div>
    <div class="text-gray-300">
      text
    </div>
  </div>
  <description class="basis-1/2 px-6" name="ExampleSpinnerDots"></description>
</div>

  <!-- <div class="ml-12 mt-[140px]"> -->
  <!--   <div -->
  <!--     ref="square2" -->
  <!--     class="absolute my-2 h-[20px] w-[20px] bg-gray-300" -->
  <!--   ></div> -->
  <!-- </div> -->

<div class="flex mx-6">
  <div class="basis-1/2 px-6">
<div class="example" @click="examples.exampleSpinner.restart()">
  <example-spinner :ref="addExample"></example-spinner>
</div>
    <div class="text-gray-300">
      text
    </div>
  </div>
  <description class="basis-1/2 px-6" name="ExampleSpinner"></description>
</div>

<div class="flex mx-6">
  <div class="basis-1/2 px-6">
<div class="example" @click="examples.exampleBars.restart()">
  <example-bars :ref="addExample"></example-bars>
</div>
    <div class="text-gray-300">
      text
    </div>
  </div>
  <description class="basis-1/2 px-6" name="ExampleBars"></description>
</div>

  <!-- <div class="flex h-[400px] flex-col"> -->
  <!--   <div -->
  <!--     ref="square" -->
  <!--     class="bg-primary-400 relative my-2 h-[40px] w-[40px] bg-gray-300" -->
  <!--   ></div> -->
  <!--   <div -->
  <!--     ref="circle" -->
  <!--     class="bg-primary-400 relative my-2 h-[40px] w-[40px] bg-gray-300" -->
  <!--   ></div> -->
  <!--   <div -->
  <!--     ref="triangle" -->
  <!--     class="bg-primary-400 relative my-2 h-[40px] w-[40px] bg-gray-300" -->
  <!--   ></div> -->
  <!-- </div> -->

  <button @click="animate.play(0)" class="mx-2">play</button>
  <button @click="animate.stop()">stop</button>
</template>

<script setup>
import { ref, onMounted } from "vue";

let examples = ref({})

let addExample = ({name, animate}) => {
  examples.value[name] = animate
}

onMounted(() => {
  // animate.set([
  //   {
  //     duration: 6800,
  //     timing: easing.easeInOutCubic,
  //     draw: (state) => {
  //       if (state.track === 0) {
  //         boxRefs.value.forEach((i, index) => {
  //           if (index % 2) state.frame.duration = 1000;
  //           else state.frame.duration = 2000;
  //
  //           state.update(100 * index);
  //
  //           i.style.transform = `translate(${state.progress + "px"})`;
  //         });
  //         if (state.isAllComplete()) state.next();
  //       } else {
  //         boxRefs.value.forEach((i, index) => {
  //           state.update(100 * index);
  //
  //           i.style.transform += ` rotate(${state.timeFraction * 360 + "deg"})`;
  //         });
  //         if (state.isAllComplete()) state.next();
  //       }
  //     },
  //     frames: [[{ duration: 2000 }, { duration: 2000 }], [{ duration: 1000 }]],
  //     remap: [0, 300],
  //     // frames: frames,
  //     // repeat: true,
  //     // direction: "reverse"
  //   },
  // ]);

  // translate rotate

  // animate.set({
  //     duration: 6800,
  //     timing: (t) =>
  //       t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
  //     draw: ([track]) => {
  //           track.update()
  //           // let degOffset = state.progress
  //           if (track.animation.initialDraw)
  //           console.log("initialDraw", track.animation.initialDraw)
  //           if (track.animation.animationStarted)
  //           console.log("animationStarted",track.animation.animationStarted)
  //           if (track.frameStarted)
  //           console.log("frameStarted", track.frameStarted)
  //           if (track.trackStarted)
  //           console.log("trackStarted", track.trackStarted)
  //           if (track.frameIndex === 0) {
  //             square2.value.style.transform = translateX(track.progress, "px")
  //
  //             track.$frame1 = track.progress
  //           }
  //           if (track.frameIndex === 1) {
  //             square2.value.style.transform = translateX(track.$frame1, "px") + rotate(track.progress, "deg")
  //
  //             track.$rotate = track.progress
  //           }
  //           if (track.frameIndex === 2) {
  //             square2.value.style.transform = translateX(track.$frame1, "px") + rotate(track.$rotate, "deg") + translateX(track.progress, "px")
  //           }
  //           if (track.isAllComplete()) track.next()
  //           // if (state.isAllTrackComplete(1)) state.next(1)
  //     },
  //     frames: [
  //       [{ duration: 1000, remap: [0, 200], reverse: true, alternate: true }, { duration: 1000, remap: [0, 90] }, { duration: 1000, remap: [0, 100] }],
  //       // [{ duration: 4000, timing: (t) => t, remap: [0, 360] }],
  //     ],
  //     // repeat: true,
  //   });

let setRandom = (min, max) => {
  return Math.random() * (max - min) + min 
}

  // animate.set({
  //     duration: 6800,
  //     timing: (t) =>
  //       t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
  //     draw: ([track, track2]) => {
  //           track.update();
  //         if (track.frameIndex === 0) {
  //           square.value.style.translate = `${track.progress + "px"}`;
  //           track.update(400);
  //           circle.value.style.translate = `${track.progress + "px"}`;
  //           track.update(800);
  //           triangle.value.style.translate = `${track.progress + "px"}`;
  //         }
  //         if (track.frameIndex === 1) {
  //           square.value.style.scale = `${track.timeFraction + 0.5}`;
  //           track.update(400);
  //           circle.value.style.scale = `${track.timeFraction + 0.5}`;
  //           track.update(800);
  //           triangle.value.style.scale = `${track.timeFraction + 0.5}`;
  //         }
  //         if (track.frameIndex === 2) {
  //           track.update(400);
  //           triangle.value.style.rotate = `${track.timeFraction * 180 + "deg"}`;
  //         }
  //         if (track.frameIndex === 3) {
  //           square.value.style.translate = `${track.progress + "px"}`;
  //           track.update(400);
  //           circle.value.style.translate = `${track.progress + "px"}`;
  //           track.update(800);
  //           triangle.value.style.translate = `${track.progress + "px"}`;
  //         }
  //         if (track.isAllComplete()) track.next(0);
  //
  //         track.update()
  //         if (track.frameIndex === 0) {
  //           square.value.style.opacity = track.timeFraction
  //         }
  //         if (track.isAllComplete()) track.next();
  //     },
  //     frames: [
  //       [
  //         { duration: 1000 },
  //         { duration: 1000, delay: 4000 },
  //         { duration: 1000 },
  //         { duration: 1000, reverse: true },
  //       ],
  //       [{ duration: 2000 }, { duration: 2000 }],
  //     ],
  //     remap: [0, 300],
  //     repeat: true,
  //   });

  // animate.play(0);
});
</script>

<style scoped>
.example {
  @apply border-b dark:border-neutral-700 py-5 my-6 flex items-center
}
</style>

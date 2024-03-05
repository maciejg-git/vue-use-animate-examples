<template>
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
  Track timeFraction property
</h5>
<div class="flex mx-6">
  <div class="basis-1/2 px-6">
    <div class="example" @click="examples.exampleTrackUpdate.restart()">
      <example-track-update :ref="addExample"></example-track-update>
    </div>
    <div class="text-gray-300">
      To get current progress of the animation update function of the track object is used. The progress is stored in timeFraction property. This value is always between 0 and 1.
    </div>
  </div>
  <description class="basis-1/2 px-6" name="ExampleTrackUpdate"></description>
</div>

<h5 class="ml-12">
  Track progress property
</h5>
<div class="flex mx-6">
  <div class="basis-1/2 px-6">
    <div class="example" @click="examples.exampleTrackUpdateProgress.restart()">
      <example-track-update-progress :ref="addExample"></example-track-update-progress>
    </div>
    <div class="text-gray-300">
     Another way of getting progress after update is the progress property of the track object. By default this value is equal to the value of the timeFraction. However progress property is modified by the easing function and the remap property if these are set.
    </div>
  </div>
  <description class="basis-1/2 px-6" name="ExampleTrackUpdateProgress"></description>
</div>

<h5 class="ml-12">
  Track update delay
</h5>
<div class="flex mx-6">
  <div class="basis-1/2 px-6">
    <div class="example" @click="examples.exampleTrackUpdateDelay.restart()">
      <example-track-update-delay :ref="addExample"></example-track-update-delay>
    </div>
    <div class="text-gray-300">
      Update function can be called with a number in the argument that defines number of miliseconds of delay before timeFraction and progress starts.
    </div>
  </div>
  <description class="basis-1/2 px-6" name="ExampleTrackUpdateDelay"></description>
</div>

<h5 class="ml-12">
  Track update multiple calls
</h5>
<div class="flex mx-6">
  <div class="basis-1/2 px-6">
    <div class="example" @click="examples.exampleTrackUpdateMultiple.restart()">
      <example-track-update-multiple :ref="addExample"></example-track-update-multiple>
    </div>
    <div class="text-gray-300">
      Update function can be called multiple times during single draw. This can be useful for animations that animate multiple elements with different settings.
    </div>
  </div>
  <description class="basis-1/2 px-6" name="ExampleTrackUpdateMultiple"></description>
</div>

<h5 class="ml-12">
  Track frames
</h5>
<div class="flex mx-6">
  <div class="basis-1/2 px-6">
    <div class="example" @click="examples.exampleMultipleFrames.restart()">
      <example-multiple-frames :ref="addExample"></example-multiple-frames>
    </div>
    <div class="text-gray-300">
      Track can have a number of frames that are played in sequence. To advance to the next frame call the next function of the track anywhere in the draw function. During next draw call new frame wil be used to update track progress. The index of the current frame is stored in the frameIndex property of the track object.
    </div>
    <div class="text-gray-300 mt-4">
      While you can call next frame anytime there are two helpers that can be used to check if the progress for current frame has finished before advancing.
    </div>
    <div class="text-gray-300 mt-4">
      isComplete() will check if current timeFraction computed in the last track update is equal to 1 (or 0 for reversed frames).
    </div>
    <div class="text-gray-300 mt-4">
      isAllComplete() will check if all timeFractions computed in the track update during current draw were equal to 1 (or 0 for reversed frames).
    </div>
  </div>
  <description class="basis-1/2 px-6" name="ExampleMultipleFrames"></description>
</div>

<h5 class="ml-12">
  Track data
</h5>
<div class="flex mx-6">
  <div class="basis-1/2 px-6">
    <div class="example" @click="examples.exampleTrackData.restart()">
      <example-track-data :ref="addExample"></example-track-data>
    </div>
    <div class="text-gray-300">
      To get current progress of the animation update function of the track object is used. The progress is stored in timeFraction property. This value is always between 0 and 1.
    </div>
  </div>
  <description class="basis-1/2 px-6" name="ExampleTrackData"></description>
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
  @apply h-[100px] border-b dark:border-neutral-700 py-10 my-6 flex items-center
}
</style>

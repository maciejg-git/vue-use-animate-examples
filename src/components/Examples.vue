<template>
  <div
    class="sticky top-0 z-50 flex h-12 items-center bg-[#212121] px-12 text-xl font-bold text-gray-300 shadow-lg"
  >
    vue-use-animate examples
  </div>

  <div class="mt-16">
    <h5 class="ml-12">timeFraction property</h5>
    <div class="mx-6 flex">
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
    
    <h5 class="ml-12">progress property</h5>
    <div class="mx-6 flex">
      <div class="basis-1/2 px-6">
        <div
          class="example"
          @click="examples.exampleTrackUpdateProgress.restart()"
        >
          <example-track-update-progress
            :ref="addExample"
          ></example-track-update-progress>
        </div>
        <div class="text-gray-300">
          <example-track-update-progress-md></example-track-update-progress-md>
        </div>
      </div>
      <description
        class="basis-1/2 px-6"
        name="ExampleTrackUpdateProgress"
      ></description>
    </div>
    
    <h5 class="ml-12">Update delay</h5>
    <div class="mx-6 flex">
      <div class="basis-1/2 px-6">
        <div class="example" @click="examples.exampleTrackUpdateDelay.restart()">
          <example-track-update-delay
            :ref="addExample"
          ></example-track-update-delay>
        </div>
        <div class="text-gray-300">
          <example-track-update-delay-md></example-track-update-delay-md>
        </div>
      </div>
      <description
        class="basis-1/2 px-6"
        name="ExampleTrackUpdateDelay"
      ></description>
    </div>
    
    <h5 class="ml-12">Reversed progress</h5>
    <div class="mx-6 flex">
      <div class="basis-1/2 px-6">
        <div
          class="example"
          @click="examples.exampleTrackUpdateReverse.restart()"
        >
          <example-track-update-reverse
            :ref="addExample"
          ></example-track-update-reverse>
        </div>
        <div class="text-gray-300">
          <example-track-update-reverse-md></example-track-update-reverse-md>
        </div>
      </div>
      <description
        class="basis-1/2 px-6"
        name="ExampleTrackUpdateReverse"
      ></description>
    </div>
    
    <h5 class="ml-12">Multiple update calls</h5>
    <div class="mx-6 flex">
      <div class="basis-1/2 px-6">
        <div
          class="example"
          @click="examples.exampleTrackUpdateMultiple.restart()"
        >
          <example-track-update-multiple
            :ref="addExample"
          ></example-track-update-multiple>
        </div>
        <div class="text-gray-300">
          <example-track-update-multiple-md></example-track-update-multiple-md>
        </div>
      </div>
      <description
        class="basis-1/2 px-6"
        name="ExampleTrackUpdateMultiple"
      ></description>
    </div>
    
    <h5 class="ml-12">Multiple frames</h5>
    <div class="mx-6 flex">
      <div class="basis-1/2 px-6">
        <div class="example" @click="examples.exampleMultipleFrames.restart()">
          <example-multiple-frames :ref="addExample"></example-multiple-frames>
        </div>
        <div class="text-gray-300">
          <example-multiple-frames-md></example-multiple-frames-md>
        </div>
      </div>
      <description
        class="basis-1/2 px-6"
        name="ExampleMultipleFrames"
      ></description>
    </div>
    
    <h5 class="ml-12">Storing and sharing data</h5>
    <div class="mx-6 flex">
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
    
    <h5 class="ml-12">Easing</h5>
    <div class="mx-6 flex">
      <div class="basis-1/2 px-6">
        <div class="example" @click="examples.exampleEasing.restart()">
          <example-easing :ref="addExample"></example-easing>
        </div>
        <div class="text-gray-300">
          <example-easing-md></example-easing-md>
        </div>
      </div>
      <description class="basis-1/2 px-6" name="ExampleEasing"></description>
    </div>
    
    <h5 class="ml-12">Easing functions</h5>
    <div class="mx-6 flex">
      <div class="basis-1/2 px-6">
        <div class="example" @click="examples.exampleEasingFunctions.restart()">
          <example-easing-functions :ref="addExample"></example-easing-functions>
        </div>
        <div class="text-gray-300">
          <example-easing-functions-md></example-easing-functions-md>
        </div>
      </div>
      <description class="basis-1/2 px-6" name="ExampleEasingFunctions"></description>
    </div>
    
    <h5 class="ml-12">Animation and track events</h5>
    <div class="mx-6 flex">
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
    
    <h5 class="ml-12">Animation repeat</h5>
    <div class="mx-6 flex">
      <div class="basis-1/2 px-6">
        <div class="example" @click="examples.exampleAnimationRepeat.restart()">
          <example-animation-repeat :ref="addExample"></example-animation-repeat>
        </div>
        <div class="text-gray-300">
          <example-animation-repeat-md></example-animation-repeat-md>
        </div>
      </div>
      <description
        class="basis-1/2 px-6"
        name="ExampleAnimationRepeat"
      ></description>
    </div>
    
    <h5 class="ml-12">Animation controls</h5>
    <div class="mx-6 flex">
      <div class="basis-1/2 px-6">
        <div class="example">
          <example-animation-controls
            :ref="addExample"
          ></example-animation-controls>
        </div>
        <div class="text-gray-300">
          <example-animation-controls-md></example-animation-controls-md>
        </div>
      </div>
      <description
        class="basis-1/2 px-6"
        name="ExampleAnimationControls"
      ></description>
    </div>

    <h5 class="ml-12">Spinner example</h5>
    <div class="mx-6 flex">
      <div class="basis-1/2 px-6">
        <div class="example" @click="examples.exampleSpinnerDots.restart()">
          <example-spinner-dots :ref="addExample"></example-spinner-dots>
        </div>
        <div class="text-gray-300"></div>
      </div>
      <description class="basis-1/2 px-6" name="ExampleSpinnerDots"></description>
    </div>
    
    <h5 class="ml-12">Spinner example 2</h5>
    <div class="mx-6 flex">
      <div class="basis-1/2 px-6">
        <div class="example" @click="examples.exampleSpinner.restart()">
          <example-spinner :ref="addExample"></example-spinner>
        </div>
        <div class="text-gray-300"></div>
      </div>
      <description class="basis-1/2 px-6" name="ExampleSpinner"></description>
    </div>
    
    <h5 class="ml-12">Spinner example 3</h5>
    <div class="mx-6 flex">
      <div class="basis-1/2 px-6">
        <div class="example" @click="examples.exampleBars.restart()">
          <example-bars :ref="addExample"></example-bars>
        </div>
        <div class="text-gray-300"></div>
      </div>
      <description class="basis-1/2 px-6" name="ExampleBars"></description>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

let examples = ref({});

let addExample = ({ name, animate }) => {
  examples.value[name] = animate;
};
</script>

<style scoped>
.example {
  @apply my-6 flex items-center border-b py-5 dark:border-neutral-700;
}
</style>

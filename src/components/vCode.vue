<template>
  <pre class="relative rounded-md overflow-hidden">
    <code ref="codeEl" class="code" :class="'language-' + language">{{ code }}</code>
  </pre>
</template>

<script>
import { ref, onMounted, watch } from "vue";
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import xml from 'highlight.js/lib/languages/xml';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('xml', xml);

export default {
  props: {
    code: { type: String, default: undefined },
    language: { type: String, default: undefined },
    template: { type: Boolean, default: false },
    script: { type: Boolean, default: false },
  },
  setup(props) {
    let codeEl = ref(null);

    onMounted(() => {
      hljs.highlightElement(codeEl.value);
    });

    return {
      codeEl,
    };
  },
};
</script>

<style scoped>
pre {
  @apply whitespace-normal my-5;
}
pre code {
  @apply text-sm whitespace-pre pl-4 py-6;
}
</style>

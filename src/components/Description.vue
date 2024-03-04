<template>
  <div v-if="templateCode || scriptCode">
    <v-code :code="templateCode" template language="html"></v-code>
    <v-code :code="scriptCode" script language="javascript"></v-code>
  </div>
</template>

<script setup>
import { ref } from "vue";

let props = defineProps({
  name: String,
});

let templateCode = ref("");
let scriptCode = ref("");
let templateRegexp = /^<template>[\r\n]+([\s\S]*?)^<\/template>/m;
let scriptRegexp = /^<script(?: setup)?>([\s\S]*?)^<\/script>/gm;
let cutTemplateRegexp = /^.*<!-- CUT START -->([\s\S]*?)<!-- CUT END -->/gm;
let cutScriptRegexp = /^.*\/\* CUT START \*\/[\r\n]+([\s\S]*?)\/\* CUT END \*\//m;
let isCodeVisible = ref(props.autoShowCode);

import(`./${props.name}.vue?raw`).then((i) => {
  templateCode.value = i.default.match(templateRegexp);
  scriptCode.value = i.default.match(scriptRegexp);

  templateCode.value = templateCode.value && templateCode.value[1];
  scriptCode.value = scriptCode.value && scriptCode.value[0];

  templateCode.value =
    templateCode.value && templateCode.value.replace(cutTemplateRegexp, "");
  scriptCode.value =
    scriptCode.value && scriptCode.value.match(cutScriptRegexp, "")[1];
});
</script>

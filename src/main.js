import { createApp, defineAsyncComponent } from 'vue'
import App from './App.vue'
import "tailwindcss/tailwind.css";
import Description from "./components/Description.vue"
import vCode from "./components/vCode.vue"
// light style
import "./styles/hljs/google-light.css";
// dark style
// import "../styles/hljs/vs2015.css";
import "./styles/hljs/oceanicnext.css";
import "./styles/style.css"

let app = createApp(App)

app.component("Description", Description)
app.component("vCode", vCode)

document.documentElement.classList.add("dark")

const examples = import.meta.glob('./components/Example*.vue')
for (const path in examples) {
  let file = path.replace(/^.*[\\\/]/, '')
  file = file.substring(0, file.lastIndexOf('.'))
  app.component(file, defineAsyncComponent(examples[path]))
}

const examplesMd = import.meta.glob('./components/markdown/*.md')
for (const path in examplesMd) {
  let file = path.replace(/^.*[\\\/]/, '')
  file = file.substring(0, file.lastIndexOf('.'))
  app.component(file + "Md", defineAsyncComponent(examplesMd[path]))
}

app.mount('#app')

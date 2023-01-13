import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
// import router from './router'

import './scss/main.scss'

const app = createApp(App)

app.use(createPinia())

app.directive("color-type", {
    updated: (el, binding) => {
        if(el.innerHTML === "Grass"){
            el.style.background = "#228F41";
            el.style.color = "white";
        }
        if(el.innerHTML === "Fire"){
            el.style.background = "#FF4D00"
            el.style.color = "white";
        }
        if(el.innerHTML === "Normal"){
            el.style.background = "grey";
            el.style.color = "white";
        }
        if(el.innerHTML === "Water"){
            el.style.background = "#00AEFF";
            el.style.color = "white";
        }
        if(el.innerHTML === "Bug"){
            el.style.background = "rgb(51, 92, 11)";
            el.style.color = "white";
        }
    }
})

app.mount('#app')

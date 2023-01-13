import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
// import router from './router'

import './scss/main.scss'

const app = createApp(App)

app.use(createPinia())

app.directive("color-calification", {
    updated: (el, binding) => {
        if(el.innerHTML === "Grass"){
            el.style.background = "#228F41";
            el.style.color = "white";
        }
        if(el.innerHTML === "Deficiente"){
            el.style.color = "#FF4D00"
        }
        if(el.innerHTML === "Suficiente"){
            el.style.color = ""
        }
        if(el.innerHTML === "Notable"){
            el.style.color = "#00AEFF"
        }
        if(el.innerHTML === "Sobresaliente"){
            el.style.color = "#001FFF"
        }
    }
})

app.mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import myUI from '@/components/myUI'

const app = createApp(App)

myUI.forEach(myUIComponent => {
    app.component(myUIComponent.name, myUIComponent)
});

app.mount('#app')

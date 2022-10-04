import { createApp } from 'vue'
import App from './App.vue'
import myUI from '@/components/myUI'
import router from './router/router';

const app = createApp(App)

myUI.forEach(myUIComponent => {
    app.component(myUIComponent.name, myUIComponent)
});

app
    .use(router)
    .mount('#app')

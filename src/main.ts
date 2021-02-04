import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import { initTimer } from "@/services/timer.service";

initTimer();
createApp(App).use(store).use(router).mount("#app");

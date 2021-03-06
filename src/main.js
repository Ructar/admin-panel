import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import "primeflex/primeflex.css";
import "primevue/resources/themes/vela-blue/theme.css";

const app = createApp(App);

app.use(PrimeVue);

app.mount("#app");

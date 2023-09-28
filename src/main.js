import { createApp } from "vue";
import PrimeVue from "primevue/config";
import "./style.css";
import App from "./App.vue";
import router from "./router";

import Image from 'primevue/image';
import InputText from 'primevue/inputtext';
import FileUpload from 'primevue/fileupload';

const app = createApp(App);

app.component("InputText",InputText);
app.component("Image",Image);
app.component("FileUpload",FileUpload);

app.use(PrimeVue);
app.use(router).mount("#app");



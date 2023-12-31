import { createApp } from "vue";
import PrimeVue from "primevue/config";

import "./style.css";
import App from "./App.vue";
import router from "./router";

import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Image from 'primevue/image';
import InputText from 'primevue/inputtext';
import FileUpload from 'primevue/fileupload';
import Card from 'primevue/card';
import InputMask from 'primevue/inputmask';



import 'primevue/resources/themes/bootstrap4-light-blue/theme.css';


const app = createApp(App);

app.component("InputMask",InputMask);
app.component("Card",Card);
app.component("DataTable",DataTable);
app.component("Column",Column);
app.component("InputText",InputText);
app.component("Image",Image);
app.component("FileUpload",FileUpload);

app.use(PrimeVue);
app.use(router).mount("#app");



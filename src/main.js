import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index.js";
import "./assets/tailwind.css";
import VueAwesomePaginate from "vue-awesome-paginate";
import "vue-awesome-paginate/dist/style.css";

const app = createApp(App);

app.use(router);

app.use(store);

app.use(VueAwesomePaginate);

app.mount("#app");

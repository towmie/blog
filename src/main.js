import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import BaseBlogList from "./components/base/BaseBlogList";

const app = createApp(App);

app.component(BaseBlogList);

app.use(store);
app.mount("#app");

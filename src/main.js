import { createApp } from 'vue';
import router from './router';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import './style.css';
import App from './App.vue';
import { ElIcon } from 'element-plus';

const app = createApp(App);
app.use(router).use(ElementPlus);
app.component(ElIcon.name, ElIcon); // 全局注册 el-icon 组件
app.mount('#app');



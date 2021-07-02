import { createApp } from 'vue'
import router from '@/router.js'
import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faBars,
    faPhone, 
    faCheck, 
    faTimes, 
    faCogs, 
    faHome, 
    faTags, 
    faList, 
    faShoppingCart, 
    faChartLine, 
    faImages, 
    faFolderOpen, 
    faFileExcel
} from "@fortawesome/free-solid-svg-icons";
import {faApple, faInstagram, faFacebook, faTwitter} from "@fortawesome/free-brands-svg-icons";
library.add(faBars, faPhone, faCheck, faTimes, faCogs, faHome, faTags, faList,faApple, faInstagram, faFacebook, faTwitter, faShoppingCart, faChartLine, faImages, faFolderOpen, faFileExcel);


import App from './App.vue'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const app = createApp(App)
app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount('#app')

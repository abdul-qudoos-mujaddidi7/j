import { createApp } from 'vue';
import {createRouter,createWebHashHistory} from 'vue-router'
import TeamList from './components/teams/TeamList.vue'
import UserList from './components/users/UserList.vue'
import App from './App.vue';

const router=createRouter({
    history:createWebHashHistory(),
    routes:[
        {path:'/teams' , component:TeamList}, // our.domain.com.teams => TeamList
        {path:'/users', component:  UserList}

    ],
});
const app = createApp(App);
app.use(router)
app.mount('#app');

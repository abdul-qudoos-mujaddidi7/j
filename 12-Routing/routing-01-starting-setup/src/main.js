import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './components/nav/NotFound.vue';
import TeamFooter from './components/teams/TeamFooter.vue';
import UserFooter from './components/users/UserFooter.vue';
import App from './App.vue';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', redirect: '/teams' },
    {
      name: 'teams',
      path: '/teams',
      components: { default: TeamsList, footer: TeamFooter },
      children: [
        {
          name: 'team-members',
          path: '/teams/:teamId',
          component: TeamMembers,
          props: true,
        },
      ],
    }, // our.domain.com.teams => TeamList && nested route
    { path: '/users', components: { default: UsersList, footer: UserFooter } },
    { path: '/:notFound(.*)', component: NotFound },
    // { path: '/users', component: UsersList },
    // {path:'/teams/:teamId', component:TeamMembers, props:true  },
    // {path:'/teams' , component:TeamsList ,alias:'/'},
  ],
  linkActiveClass: 'active',
  scrollBehavior(to,from,savedPosition){
    console.log(to,from,savedPosition)

    if(savedPosition){
        return savedPosition
    }

    return{left:0,top:0}

  }
});
const app = createApp(App);

router.beforeEach(function(to,from,next){
    console.log("Global Reach!")
    console.log(to,from)
    // if(to.name==="team-members"){
    //     next()
    // }

    // else{
    //     next({name:'team-members',params:{teamId:'t2'}})
    // }
    next();
})
app.use(router);
app.mount('#app');

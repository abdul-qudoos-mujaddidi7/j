<template>
<button @click="userInput">Confirm</button>
<button @click="updateConfirm">Confirm Change</button>
  <ul>
    <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
  </ul>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
  components: {
    UserItem,
  },

  data(){
    return{
      confirm: false
    }
  },
  inject: ['users'],
  methods:{
    userInput(){
      this.$router.push('/teams')
    },

    updateConfirm(){
      this.confirm=true
    }
  },

  beforeRouteEnter(to,from,next){
    console.log('beforeRouteEnter')
    console.log(to,from)
    next()
  },

  beforeRouteLeave(to,from,next){
    console.log("beforeRouteLeave")
    console.log(to,from)
    if(this.confirm){
      next()
    }
    else{
      const confirmStatus= confirm("Do you really want to leave!")
      next(confirmStatus)
    }
  },

  unmounted(){
    console.log('unmounted')
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>
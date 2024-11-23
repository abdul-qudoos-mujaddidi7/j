const app = Vue.createApp({
  data() {
    return {
      userGoalA: "Finish the course and learn Vue!",
      userGoalB: "Master Vue and build amazing apps!",
      vueLink:'https://vuejs.org/'
    };
  },
  methods:{
    outputGoals(){
      const randomNumber= Math.random();
      if(randomNumber<0.5){
        return this.userGoalA
      }else {
        return this.userGoalB
      }
    }
  }
});
app.mount("#user-goal");

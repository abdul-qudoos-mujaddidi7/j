<template>
  <div>
    <h2>Manage Goals</h2>
    <!-- <input type="text" v-model='goal' /> -->
    <input type="text" ref="goal" />
    <button @click="setGoal">Set Goal</button>
    <teleport to="body">
      <error-alert v-if='inputIsInvalid'>
      <h2>Input is invalid!</h2>
      <p>Please enter at least a few characters....</p>
      <button @click="confirmError">Okay</button>
    </error-alert>
    </teleport>
    
  </div>
</template>

<script>

import ErrorAlert from './ErrorAlert.vue'
export default {

  components:{
    ErrorAlert
  },

  data(){
    return{
      goal:'',
      inputIsInvalid:false
    }
  },
  methods:{
    // setGoal(){
    //   if(!this.goal){
    //     alert('Input must not be empty!')
    //   }

    // }
    setGoal(){
      const enteredValue=this.$refs.goal.value
      if(enteredValue===''){
        this.inputIsInvalid=true
      }

    },
    confirmError(){
      this.inputIsInvalid=false
    }
  }
}
</script>
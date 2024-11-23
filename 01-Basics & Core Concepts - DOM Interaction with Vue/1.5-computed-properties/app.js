const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name:'',
      // fullname:'',
      lastName:'',
      confirmedName:''
    };
  },
  watch:{
    counter(value){
      if(value>15){
        this.counter=0
      }
    }
    // name(value){
    //   if(value==''){
    //     this.fullname=''
    //   }
    //   this.fullname= value

    // },
    // lastName(value){
    //   if(value==''){
    //     this.fullname=''
    //   }
    //   this.fullname=this.name + ''+ value
    // }

  },
  computed:{
    fullname(){
      console.log("Run again!")
      if(this.name===''){
        return ''
      }
      return this.name + '' + this.lastName

    }
    

  },
  methods:{
    outputFullName(){
      console.log("Run again!")
      if(this.name===''){
        return ''
      }
      return this.name + '' + " Yes!"
    },
   
    // setName(event){
    //   this.name= event.target.value

    // },
    add(number){
      this.counter=this.counter+number
    },
    reduce(number){
      this.counter=this.counter-number
    },
    reset(){
     this.name=''

    }

  },
 
});

app.mount('#events');


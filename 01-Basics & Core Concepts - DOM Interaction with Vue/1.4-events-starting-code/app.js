const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name:'',
      confirmedName:''
    };
  },
  methods:{
    outputFullName(){
      console.log("Run again!")
      if(this.confirmedName===''){
        return ''
      }
      return this.confirmedName + '' + " Yes!"
    },
    confirmedInput(){
        this.confirmedName= this.name;

    },
    setName(event){
      this.name= event.target.value

    },
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


function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + 5;
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound:0,
      winner:null,
      logMessages:[],
      
    };
  },

  computed:{

    monsterBarStyles(){
      if(this.monsterHealth<0){
        return {width:'0%'}
      }else{
        return {width:this.monsterHealth+'%'}
      }
        
    },
    playerBarStyles(){

      if(this.playerHealth<0){
        return {width:'0%'}
      }else{

        return {width:this.playerHealth+'%'}
      }
  },

    mayUseSpecialAttack(){

      return this.currentRound!==3

    }

    // playerBarStyles(){
    //     return {width:this.playerHealth+'%'}
    // }

  },

  watch:{
    playerHealth(value){
      if(value<=0 && this.monsterHealth<=0){
        this.winner='draw'
      }else if(value<=0){
        this.winner='monster'
      }
    },

    monsterHealth(value){
      if(value<=0 && this.playerHealth<=0){
        this.winner='draw'
      }else if(value<=0){
        this.winner='player'
      }
    }

  },

  methods: {
    attacKMonster() {
      this.currentRound++;
      const attackValue = getRandomValue(5, 12);
      this.monsterHealth -= attackValue;
      this.addLogMessage('player','attack',attackValue);
      this.attackPlayer();
    },
    attackPlayer() {
      const attackValue = getRandomValue(8, 15);
      this.playerHealth -= attackValue;
      this.addLogMessage('monster','attack',attackValue);

    },

    specialAttackMonster(){
      this.currentRound=0;
        const attackValue= getRandomValue(10,25);
        this.monsterHealth-=attackValue;
        this.addLogMessage('player','specialAttack',attackValue);
        this.attackPlayer();
    },

    heal(){
      const healValue=getRandomValue(8,20);
      if(this.playerHealth+healValue>100){
        this.playerHealth=100
      }else{
        this.playerHealth+=healValue
      }

      this.addLogMessage('player','heal',healValue);
      this.attackPlayer();
    },

    startAgain(){
      this.playerHealth=100,
      this.monsterHealth=100,
      this.winner=null,
      this.currentRound=0,
      this.logMessages=[]
    },
    surrender(){
      this.winner='monster',
      this.logMessages=[],
      this.playerHealth=0
    },

    addLogMessage(who,what,value){
      this.logMessages.unshift({
        actionBy:who,
        actionType:what,
        actionValue:value
      })
    }
  },
});


app.mount('#game')

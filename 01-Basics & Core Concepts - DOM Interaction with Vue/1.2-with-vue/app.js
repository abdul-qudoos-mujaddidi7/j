Vue.createApp({
  data() {
    return {
      goals: [],
      enteredValue: "", // Add an initial value to enteredValue
    };
  },
  methods: {
    addGoal() {
      // Push the entered value to the goals array
      this.goals.push(this.enteredValue);
      // Clear the enteredValue after adding the goal
      this.enteredValue = "";
    },
  },
}).mount("#app");
// this refers to the Vue instance that is created by Vue.createApp({ ... }).
// This Vue instance holds all the reactive data, methods, computed properties,
//  and lifecycle hooks for your application.

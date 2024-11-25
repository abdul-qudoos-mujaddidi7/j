<template>
    <li>
        <h2>{{ friend.name }}</h2>
        <button @click="toggleDetails">{{detailsAreVisible?'Hide':'Show'}}Details</button>
        <ul v-if="detailsAreVisible">
            <li>{{ friend.phone }}</li>
            <li>{{ friend.email }}</li>
        </ul>
    </li>
</template>

<script>
export default {
  data() {
    return {
        detailsAreVisible: false,
      friend: {
        id: "jawad",
        name: "Jawad Mujaddidi",
        phone: "0784801901",
        email: "jawad@gmail.com",
      },
    };
  },
  methods:{
    toggleDetails(){
        this.detailsAreVisible=!this.detailsAreVisible
    }
  }
};
</script>



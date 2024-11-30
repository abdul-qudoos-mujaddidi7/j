<template>
    <li>
        <h2>{{ name }}</h2>
        <button @click="toggleDetails">{{detailsAreVisible?'Hide':'Show'}}Details</button>
        <ul v-if="detailsAreVisible">
            <li>{{ phone }}</li>
            <li>{{ email }}</li>
        </ul>
    </li>
</template>

<script>
export default {
    props:[
        'name',
        'phone',
        'email'
    ],
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



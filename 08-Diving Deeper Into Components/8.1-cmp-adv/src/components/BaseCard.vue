<template>
    <div>
      <!-- Check if the 'header' slot is passed and conditionally render it -->
      <header v-if="$slots.header">
        <slot name="header"></slot>
      </header>
      <!-- Default slot content -->
      <slot></slot>
    </div>
  </template>
  
  <script>
  export default {
    mounted() {
      // Log the header slot to see if it's passed from the parent
      console.log(this.$slots.header);
    }
  }
  </script>
  
  <style scoped>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  div {
    margin: 2rem auto;
    max-width: 30rem;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 1rem;
  }
  </style>
  
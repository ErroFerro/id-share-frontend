<script setup>
</script>


<template>
<div id="container">
  <button id="home" @click="$router.push('homepage')" >
    <img src="src\pics\home.png" alt="share image">
    Home
  </button>
</div>

</template>


<style scoped>

button{
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  text-align: center;
  width: 80%;
  height: 80px;
  border: 1px solid transparent;
  border-radius: 50px;
  font-size: 1.3em;
  font-weight: 500;
  font-family: inherit;
  cursor: pointer;
  transition: border-color 0.25s;
  color: white;
}
</style> 

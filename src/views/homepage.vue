<script setup>
import SpidBtn from "../components/SpidBtn.vue";

// ESEMPIO IN JAVASCRIPT
// import router from '../router';
// router.push("/file.vue")

function redirectToOAuth() {
  // Redirect to the backend's OAuth route
  window.location.href = "http://localhost:3000/api/v1/auth/google";
}
</script>

<template>
  <div id="container">
    <Image src="/img/logo.png" alt="Image" width="180" />

    <div class="titoli">
      <h1 style="margin-bottom: 0px">IBE SHARING</h1>
      <h3>Mobile Service</h3>
    </div>

    <button id="Share" @click="$router.push('choose')">
      <img src="/img/share.png" alt="share image" />
      Condividi un File
    </button>

    <hr />

    <button id="Login" @click="redirectToOAuth">
      <img src="/img/Gpic.png" alt="share image" />
      Entra con Google
    </button>
    
    <button id="Login" @click="$router.push('fileviewer')">
      TEST FILEVIEWER
    </button>

    <SpidBtn />
  </div>
</template>
<style scoped>
#container {
  width: 415px;
  margin: 20px auto;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

hr {
  border: 0.5px solid lightblue;
  margin: 10% 1% 5% 1%;
  border-radius: 5px;
  width: 80%;
}
#Share {
  background-color: var(--blue-primary);
}
#Share:hover {
  background-color: var(--blue-hover);
}

#Login {
  background-color: var(--blue-secondary);
}
#Login:hover {
  background-color: var(--blue-hover);
}

h1 {
  color: var(--blue-secondary);
  font-size: 3em;
  font-weight: 700;
  text-align: center;
  /* font-family: inherit;
  border-radius: 5px; */
}
h3 {
  color: var(--blue-secondary);
  text-align: center;
  padding-top: 3px;
}
</style>

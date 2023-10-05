<script setup>
import SpidBtn from "../components/SpidBtn.vue";
import Card from 'primevue/card';

// ESEMPIO IN JAVASCRIPT
// import router from '../router';
// router.push("/file.vue")

function redirectToOAuth() {
  // Redirect to the backend's OAuth route
  window.location.href = "http://localhost:3000/api/v1/auth/google";
}
</script>

<template>
  <div id="background">

    <!-- <Image src="/img/logo.png" alt="Image" width="180" /> -->
    <img class="logo" src="/img/logo.png" alt="Image" width="250"  />
    
    <div id="container">

      <Card style="border-radius: 25px; height: 650px;" >
        
        <template #title class="titoli">
            <h1 style="margin-bottom: 0px">IBE SHARING</h1>
            <h3>Mobile Service</h3>
        </template>
        
        <template #content>

            <button id="Share" @click="$router.push('choose')">
            <img src="/img/share.png" alt="share image" />
            Condividi un File
          </button>

          <hr />

          <button id="Login" @click="redirectToOAuth">
            <img src="/img/Gpic.png" alt="share image" />
            Entra con Google
          </button>
  
          <!-- <button id="Login" @click="$router.push('fileviewer')">
            TEST FILEVIEWER
          </button> -->

          <SpidBtn />

        </template>
         
      </Card>
    </div>
  </div>
</template>
<style scoped>

#background{
  display: flex;
  flex-direction: column;
  background-image: url("../assets/choosebackgroundmobile.png");
  background: cover;
  background-size: 100%;
  background-repeat:no-repeat;
  background-position-x: left ;
  height: 100vh;
}

#container {

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width:500px;
  padding: 0;
  margin:0 auto;
  

  /* width: 415px;
  margin: 20px auto;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; */
}


hr {
  margin: 10% 1% 5% 1%;
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

}
h3 {
  color: var(--blue-secondary);
  text-align: center;
  padding-top: 3px;
}

.logo{   /** si puo mettere in style.css? */
  margin: 20px auto;
  border-radius: 40px;
}


@media (min-width: 1050px){  /* mobilefirst */

            #container{
              margin: 50px;
            }
            
            #background{
              display: flex;
              flex-direction: column;
              background-image: url("../assets/choosebackground.png");
              background: cover;
              background-size: cover;
              background-repeat: no-repeat;
              height: 100vh;
            }

        }
</style>

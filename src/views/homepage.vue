<script setup>
import SpidBtn from "../components/SpidBtn.vue";
import Card from 'primevue/card';

//TODO
/**
 * gesitre margine di spidbutton, mettere margintop5% e levarlo da style.css
 * scegliere se fare card piccola e grande
 * rendere card responsive
 * controllare bene media query
 */



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
    <img class="logo" src="/img/logo.png" alt="Image"   />
    
    <div id="container">

      <Card style="border-radius: 25px;" >
        
        <template #title class="titoli">
            <h1 style="margin-bottom: 0px">IBE SHARING</h1>
            <h4>Mobile Service</h4>
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

          <SpidBtn/>

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
  height: 100vh;
  width: 100vw;
}

#container {
/*Card grande */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width:500px;
  padding: 0;
  margin:0 auto;
  height: 650px;

/*Card piccola */
  /* display: flex;
  justify-content: left;
  align-items: center;
  padding: 0;
  width: 325px;
  height: 370px;
  margin-bottom: 20px; */
}

hr {
  margin: 10% 1% 10% 1%;
}

#Share {
  background-color: var(--blue-primary);
}
#Login {
  background-color: var(--blue-secondary);
}
#Share:hover, #Login:hover  {
  background-color: var(--blue-hover);
}
SpidBtn{
  margin-top: 5%;
}

h1 {
  color: var(--blue-secondary);
  /* font-size: 1.5em; card piccola */
  font-size: 2.5em; /*grande */
  font-weight: 700;
  text-align: center;
  padding: 0;
  margin: 0;
  margin-top: 10%;
}

h4 {
  color: var(--blue-secondary);
  text-align: center;
  margin-top: 8%;
  font-size: 1.5em; /** card grande */
  /*font-size: 0.8em; /** card piccola */
  padding: 0;
}


@media (min-width: 800px){  /* mobilefirst */

            #container{
              margin-left: 20px;
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
            #spid-button{
              margin-top: 100%;
            }

        }
@media (max-height:800px){
  .logo{
    display: none;
  }
  #background{
    justify-content: center;
    align-items: center;
  }
  #container{
    margin: 0;
  }
}

</style>

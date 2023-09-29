<script setup>
import SpidBtn from '../components/spidbtn.vue';
// ESEMPIO IN JAVASCRIPT
// import router from '../router';
// router.push("/file.vue")
</script>

<template>

  <div id="container">
    <Image  src="src\pics\logo.png" alt="Image" width="180" />
    
    <div id="titoli">
      <h1 style="margin-bottom: 10px;" >IBE SHARING</h1>
      <h3 style="margin-top: 10px;">Mobile Service</h3>
    </div>

    <button id="Share" @click="$router.push('choose')" >
      <img src="src\pics\share.png" alt="share image" >
      Condividi un File
    </button>

    <button  id="Login" @click="$router.push('login')">
      <img src="src\pics\Gpic2.png" alt="share image">
      Entra con Google
    </button>

    <div style="margin-top: 10px;">
      <SpidBtn/>
    </div>
  </div>

</template>
<style scoped>



/*Buttons*/
#divbuttons{
  margin-bottom: 300px;
  height: 100px;
  margin-top: 30px;
}
button{
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  text-align: center;
  /* margin: 20px 30px; */
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

#Share{
  background-color: #38B6FF;
  width: 80%;
  margin-top:60px;
}

#Login{
  margin-top: 60px;
  background-color: #004AAD;
}

button img {
  border-radius: 50px;  
  width: 70px;
  margin: 0;
  padding: 0;
  margin-right: 30px;
}

/*Titles, h1, h2*/

#titoli{
  margin-top:25px;
}

h1 {
  color: #004AAD;
  font-size: 3em;
  font-weight: 700;
  text-align: center;
  font-family: inherit;
  border-radius: 5px;
}
h3 {
  color: #004AAD;
  font-weight: 700;
  padding: auto;
  text-align: center;
  font-family: inherit;
  padding-top: 3px;
  border-radius: 5px;
  margin: 0;

}

/*others*/

#container{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 415px;
  margin: 20px auto;
  padding: 0;
}

</style>
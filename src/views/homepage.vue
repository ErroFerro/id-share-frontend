<script setup>




/* ESEMPIO IN JAVASCRIPT*/
//import router from '../router';
//router.push("/file.vue")

/*
 */


</script>

<template>

  <div id="container">

<Image  src="src\pics\logo.png" alt="Image" width="180" />
    <div id="titoli">
      <h1 style="margin-bottom: 10px;" >IBE SHARING</h1>
      <h3 style="margin-top: 10px;">Mobile Service</h3>
    </div>
    
        <div id="divbuttons">
          <button id="Share" @click="$router.push('choose')" >
        <img src="src\pics\share.png" alt="share image" >
        Condividi un file
        </button>

        <button id="Login" @click="$router.push('login')">
          <img src="src\pics\login.png" alt="share image">
          Login
        </button>
      </div>
    </div>
</template>
<style scoped>

/*Buttons*/
#divbuttons{
  margin-bottom: 300px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  height: 300px;
  margin-top: 30px;
}
button{
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  text-align: center;
  margin: 20px 30px;
  width: 80%;
  height: 80px;
  border: 1px solid transparent;
  border-radius: 50px;
  font-size: 1.3em;
  font-weight: 500;
  font-family: inherit;
  cursor: pointer;
  transition: border-color 0.25s;
}

#Share{
  background-color: #38B6FF;
}

#Login{
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
  margin-top: 80px;
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
}

/*others*/
#logo {
  margin-top: 150px;

}

/* #container{
  border: 3px rgb(0, 0, 0) solid;
  background-color: #FFFFFF;
  border-radius: 20px;
  width: 415px;
  height: 900px;
  margin: 0;
  padding: 0;
} */


</style>

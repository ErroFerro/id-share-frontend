<script setup>
import { ref } from "vue";
import Card from 'primevue/card';

let comment = ref("");
let emailfrom = ref("");
let emailto = ref("");
let cf = ref("");
let titolo = ref("");

//creare un bottone che solo dopo aver scelto il file lo carica da qualche parte
</script>

<template >

  <div id="background">

      <img class="logo" src="/img/logo.png" alt="Image" width="250"  />

  
    <div id="container">
      <Card style="border-radius: 25px; height: 650px;"  >
        <template #title class="titoli">
          <h1 >UPLOAD & SHARE</h1>
        </template>

        <template #content>
            <div class="divinputs">  

              <span class="p-float-label">
                <InputText class="inputtext" id="emailto" v-model="emailto" />
                <label for="emailto">Email ricevente</label>
              </span>

              <span class="p-float-label">
                <InputText class="inputtext" id="emailfrom" v-model="emailfrom" />
                <label for="emailfrom">La tua email</label>
              </span>

              <span class="p-float-label">
                <InputText class="inputtext" id="cf" v-model="cf" />
                <label for="cf">C.F. ricevente</label>
              </span>

              <span class="p-float-label">
                <InputText class="inputtext" id="title" v-model="titolo" />
                <label for="title">Titolo</label>
              </span>

              <span class="p-float-label">
                <InputText class="inputtext" id="comment" v-model="comment" />
                <label for="comment">Commento</label>
              </span>

            </div>

            <div style="text-align: center; width: 100%; margin: 0; padding: 0;">
              <FileUpload
                mode="basic"
                :auto="false"
                :customUpload="true"
                :maxFileSize="10000000000000"
                @uploader="uploadFile($event)"
                chooseLabel="Scegli file"
                style="
                  display: flex;
                  flex-wrap: nowrap;
                  align-items: center;
                  text-align: center;
                  width: 80%;
                  height: 10%;
                  border-radius: 50px;
                  font-size: 1.3em;
                  cursor: pointer;
                  transition: 0.3s;
                  background-color: var(--blue-primary);
                  color: white;
                  padding: 1em;
                  margin: 1.5em auto;
                "
              />

            </div>

            <hr />

            <button id="Home" @click="$router.push('homepage')">
              <img src="/img/home.png" alt="share image" />
              Home
            </button>
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
  margin: 50px auto;
  
}
.logo{
  margin: 20px auto;
  border-radius: 40px;
}

.divinputs { 
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  height: 300px;
  align-items: center;
} 
.inputtext {
  border: solid var(--blue-primary) 2px;
  border-radius: 50px;
  color: var(--blue-primary);
  width: 100%;
  height: 100%;
  font-size: 1.2em;
  margin: 0;
  padding: 20px;
}

span label {
  margin: 1px auto 5px 10px;
  color: var(--blue-primary);
}

.p-float-label {
  width: 100%;
  height: 20px;
  display: flex;
  flex-wrap: nowrap;
  margin: 5px;
}

#Home {
  background-color: var(--blue-secondary);

}

#Home:hover {
  background-color: var(--blue-hover);
}

h1 {
  color: var(--blue-secondary);
  font-size: 2em;
  text-align: center;
  margin-top: 20px;
}




@media (min-width:1050px){  /* mobilefirst */
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

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
      <Card style="border-radius: 25px;"  >
        
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

              <!-- <span class="p-float-label">
                <InputText class="inputtext" id="title" v-model="titolo" />
                <label for="title">Titolo</label>
              </span>

              <span class="p-float-label">
                <InputText class="inputtext" id="comment" v-model="comment" />
                <label for="comment">Commento</label>
              </span> -->

            </div>

            <div id="divfileupload">
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
                  width:100%;
                  height: 100%;
                  border-radius: 50px;
                  font-size: 1.3em;
                  cursor: pointer;
                  transition: 0.3s;
                  background-color: var(--blue-primary);
                  color: white;
                  /* padding: 1em; */
                  margin: 1.2em 0;
                "
              />
            </div>
            
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
  height: 100vh;
  width: 100vw;
}

#container {
/*Card grande */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width:300px;
  padding: 0;
  margin:0 auto;
  height: 500px;
}


.divinputs { 
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  height: 200px;
  width: 90%;
  align-items: center;
} 

#divfileupload{
  
  width:90%;
  height: 100%;
  padding: 0;
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
  /* font-size: 1.5em; card piccola */
  font-size: 1.2em; /*grande */
  font-weight: 700;
  text-align: center;
  padding: 0;
  margin: 0;
  margin-top: 10%;
}



@media (min-width:800px){  /* mobilefirst */
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
  .logo{
  width: 10em;
  }
}

@media (max-height:500px){
  .logo{
    display: none;
  }
  #background{
    justify-content: center;
    align-items: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
  #container{
    margin: 0;
  }
}

</style>

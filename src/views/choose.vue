<script setup>
import { ref } from "vue";

let comment = ref("");
let emailfrom = ref("");
let emailto = ref("");
let cf = ref("");
let titolo = ref("");
</script>

<template>
  <div id="container">
    <Image src="/img/logo.png" alt="Image" width="180" />

    <div class="titoli">
      <h1>UPLOAD & SHARE</h1>
    </div>

    <div id="divinputs">
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

    <div style="text-align: center; width: 100%">
      <FileUpload
        mode="basic"
        :auto="false"
        :customUpload="true"
        :maxFileSize="10000000000000"
        @uploader="uploadFile($event)"
        chooseLabel="Scegli file"
        style="
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
          margin-top: 1.5em;
        "
      />
    </div>

    <button id="Home" @click="$router.push('homepage')">
      <img src="/img/home.png" alt="share image" />
      Home
    </button>
  </div>
</template>
<style scoped>
#container {
  width: 415px;
  margin: 20px auto;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#divinputs {
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
/*
button img {
  border-radius: 50px;  
  width: 70px;
  margin: 0;
  padding: 0;
  margin-right: 30px;
} */

/* #divinputws{
  color: black;
  display: flex;
  flex-wrap: wrap;
} */

/* 
#input{
  width: 100%;
  padding: 0;
  margin: 0;
display: flex;
  flex-wrap: wrap; 
}




#divbuttons{
  margin-bottom: 300px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  height: 100px;
  margin-top: 0;
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




#titoli{
  margin-top: 80px;
}

h1 {
  color: #004AAD;
  font-size: 2.5em;
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


#logo {
  margin-top: 150px;
}



*/
</style>

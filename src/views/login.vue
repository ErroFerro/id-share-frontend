<script setup>
import {ref} from 'vue';




</script>


<template>
  <div id="container">


    <div id="logo">
      <Image  src="src\pics\logo.png" alt="Image" width="180" />
    </div>
    
    <div id="titoli">
      <h1 style="margin-bottom: 10px;" >UPLOAD & SHARE</h1>
    </div>

    <div id="divinputs">
        <span class="p-float-label">
            <InputText id="emailto" v-model="value" />
            <label for="emailto">email ricevente</label>
        </span>

        <span class="p-float-label">
            <InputText id="emailfrom" v-model="value" />
            <label for="emailfrom">la tua email</label>
        </span>

        <span class="p-float-label">
            <InputText id="cf" v-model="value" />
            <label for="cf">C.F. ricevente</label>
        </span>

        <span class="p-float-label">
            <InputText id="title" v-model="value" />
            <label for="title">Titolo</label>
        </span>

        <span class="p-float-label">
            <InputText id="comment" v-model="value" />
            <label for="comment">Commento</label>
        </span>
    </div>


    <FileUpload mode="basic" name="demo[]" url="./upload.php" accept="image/*" :maxFileSize="1000000" @click="flag=!flag" @upload="onUpload" />
    
    <button v-if="flag"  id="share" >
      <img src="src\pics\share.png" alt="share image">
      condividi il file
    </button>


    <button id="home" @click="$router.push('homepage')" >
      <img src="src\pics\home.png" alt="share image">
        Home
      </button>

      
      </div>
    
</template>
<style scoped>

#divinputs{
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  width:40%;
  height: 300px;
  align-items: center;
}
.p-float-label{
  width: 100%;
  height: 20px;
  display: flex;
  flex-wrap: nowrap;
  color: gray;
  margin: 5px;

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
  color: white;

}
button img {
  border-radius: 50px;  
  width: 70px;
  margin: 0;
  padding: 0;
  margin-right: 30px;
}


 #container{
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
} 

#choose{
  background-color: #5271FF;
}
#home{
  background-color: #38B6FF
}

#share{
  background-color: #38B6FF
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

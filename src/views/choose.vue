<script setup>
import { ref, onMounted } from "vue";
import { Buffer } from "buffer";
import { saveAs } from "file-saver";
globalThis.Buffer = Buffer;
import CryptoJS from "crypto-js";
import init, {
  bsw_encrypt_attributes,
  bsw_decrypt,
  CpAbeCiphertext,
} from "../ibe/pkg/rabe_wasm";
import DownloadFile from "../components/DownloadFile.vue";

let pk = ref("");
let comment = ref("");
let emailfrom = ref("");
let emailto = ref("");
let cf = ref("");
let titolo = ref("");

onMounted(async () => {
  await init();
  getPk();
});

async function getPk() {
  let result = await fetch("http://localhost:3000/api/v1/key/pk");
  let val = await result.json();
  pk.value = val.data.pk;
}

async function uploadFile(event) {
  try {
    const file = event.files[0];

    let metadata = {
      key: CryptoJS.lib.WordArray.random(32).toString(),
      fileName: file.name,
      sender: emailfrom.value,
      receiver: emailto.value,
    };

    const bufferMetadata = Buffer.from(JSON.stringify(metadata));

    const reader = new FileReader();
    reader.onload = async (res) => {
      const arrayBuffer = res.target.result;

      // Generate key of length 32, used to encrypt the file
      const base64data = arrayBufferToBase64(arrayBuffer);
      const encrypted = CryptoJS.AES.encrypt(base64data, metadata.key);
      const encryptedString = encrypted.toString();

      // Encrypt the metadata
      bsw_encrypt_attributes(pk.value, bufferMetadata, [
        metadata.receiver,
      ]).then(async (ct_cp) => {
        let metadataCiphertext = {
          policy: ct_cp.get_policy(),
          policy_language: ct_cp.get_policy_language(),
          c: ct_cp.get_c(),
          c_p: ct_cp.get_c_p(),
          c_y: ct_cp.get_c_y(),
          ct: ct_cp.get_ct(),
        };

        const formData = new FormData();

        formData.append("json", JSON.stringify(metadataCiphertext));
        formData.append("data", encryptedString);
        let response = await fetch("http://localhost:3000/api/v1/file/upload", {
          method: "POST",
          body: formData,
        });
        let val = await response.json();
        console.log(val);

        if (val.status === "success") {
          console.log("File uploaded successfully!");
        } else {
          console.log("File couldn't be uploaded!");
        }
      });
    };

    reader.readAsArrayBuffer(file);
  } catch (err) {
    console.log(err);
  }
}

function arrayBufferToBase64(arrayBuffer) {
  const uint8Array = new Uint8Array(arrayBuffer);
  let binaryString = "";
  for (let i = 0; i < uint8Array.length; i++) {
    binaryString += String.fromCharCode(uint8Array[i]);
  }
  return btoa(binaryString);
}
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
            <DownloadFile/>
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

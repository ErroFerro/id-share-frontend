<script setup>
import { ref, onMounted } from "vue";
import CryptoJS from "crypto-js";
import { saveAs } from "file-saver";
import init, {
  bsw_encrypt_attributes,
  bsw_decrypt,
  CpAbeCiphertext,
} from "../ibe/pkg/rabe_wasm";

// const key = ref("");

onMounted(async () => {
  await init();
});



const props = defineProps(['fileCode','sk'])

async function download() {
  try {
    console.log(props.fileCode)
    const res = await fetch(
      "http://localhost:3000/api/v1/file/download/" + props.fileCode
    );
    
    console
    const val = await res.json();

    let fileContent = await JSON.parse(val.data);
    let metadataCiphertext = JSON.parse(fileContent.metadata);

    const ct_cp = new CpAbeCiphertext(
      metadataCiphertext.policy,
      metadataCiphertext.policy_language,
      metadataCiphertext.c,
      metadataCiphertext.c_p,
      metadataCiphertext.c_y,
      new Uint8Array(Object.values(metadataCiphertext.ct))
    );
    bsw_decrypt(props.sk, ct_cp)
      .then((r) => {
        const metadata = JSON.parse(new TextDecoder().decode(r));
        const key = metadata.key;

        const fileData = fileContent.data;

        var decrypted = CryptoJS.AES.decrypt(fileData, key);
        const decryptedString = decrypted.toString(CryptoJS.enc.Utf8);

        const binaryString = atob(decryptedString);
        const uint8Array = new Uint8Array(binaryString.length);
        for (let i = 0; i < binaryString.length; i++) {
          uint8Array[i] = binaryString.charCodeAt(i);
        }

        const blob = new Blob([uint8Array]);
        saveAs(blob, metadata.fileName);
      })
      .catch((err) => {
        console.error(err);
      });
  } catch (err) {
    console.log(err);
  }
}
</script>
<template>
  <button id="Download" @click="download()"  >
    <img src="/img/home.png" alt="share image" />
    Download
  </button>
</template>
<style>
#Download {
  background-color: var(--blue-secondary);
}


#Download:hover {
  background-color: var(--blue-hover);
}
#Download:disabled{
  background-color: #607795;
}


</style>

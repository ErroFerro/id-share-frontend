<script setup>
import { ref, onMounted } from "vue";
import CryptoJS from "crypto-js";
import { saveAs } from "file-saver";
import init, {
  bsw_encrypt_attributes,
  bsw_decrypt,
  CpAbeCiphertext,
} from "../ibe/pkg/rabe_wasm";

const sk = ref("");
// const key = ref("");

onMounted(async () => {
  await init();
  getSk();
});

async function getSk() {
  let result = await fetch("http://localhost:3000/api/v1/key/sk");
  let val = await result.json();
  sk.value = val.data.sk;
}

const fileID = "LIDVtFMlIM";

async function download() {
  try {
    const res = await fetch(
      "http://localhost:3000/api/v1/file/download/" + fileID
    );
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
    bsw_decrypt(sk.value, ct_cp)
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

// async function download() {
//   try {
//     const res = await fetch(
//       "http://localhost:3000/api/v1/file/download/6DNNCaTmm2"
//     );
//     const val = await res.json();

//     let fileContent = await JSON.parse(val.data);
//     let metadataCiphertext = fileContent.metadata;

//     // Extrapolates the key and saves it in key.value
//     decrypt(JSON.parse(metadataCiphertext));

//     const fileData = fileContent.data;

//     var decrypted = CryptoJS.AES.decrypt(fileData, key.value);
//     const decryptedString = decrypted.toString(CryptoJS.enc.Utf8);

//     const binaryString = atob(decryptedString);
//     const uint8Array = new Uint8Array(binaryString.length);
//     for (let i = 0; i < binaryString.length; i++) {
//       uint8Array[i] = binaryString.charCodeAt(i);
//     }

//     const blob = new Blob([uint8Array]);
//     saveAs(blob, "test.json");
//   } catch (err) {
//     console.log(err);
//   }
// }

// async function decrypt(metadata) {
//   const ct_cp = new CpAbeCiphertext(
//     metadata.policy,
//     metadata.policy_language,
//     metadata.c,
//     metadata.c_p,
//     metadata.c_y,
//     new Uint8Array(Object.values(metadata.ct))
//   );
//   bsw_decrypt(sk.value, ct_cp)
//     .then((r) => {
//       const metadata = new TextDecoder().decode(r);
//       key.value = JSON.parse(metadata).key;
//     })
//     .catch((err) => {
//       console.error(err);
//     });
// }
</script>
<template>
  <button id="Download" @click="download()" style="background-color: red">
    <img src="/img/home.png" alt="share image" />
    Download
  </button>
</template>
<style></style>

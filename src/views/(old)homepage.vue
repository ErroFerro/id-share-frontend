<script setup>
import { ref, onMounted } from "vue";  //utilizzo ref e onload
import { Buffer } from "buffer";
globalThis.Buffer = Buffer;  //pre wasm cifratura
import init, {
  bsw_encrypt_attributes,
  bsw_decrypt,
  CpAbeCiphertext,
} from "../ibe/pkg/rabe_wasm";

//definiamo variabili usate all'interno dell'html, per inserire il valore bisogna usare .value
//ma nell'html non serve il .value (ref permette il loro aggiornamento)
let user = ref("");
let sk = ref("");
let pk = ref("");
let textInput = ref("");
let ciphertext = ref("");
let text = ref("");
onMounted(async () => {
  await init();
  getUser();
  getPk();
  getSk();[]
});

async function getUser() {
let result = await fetch("http://localhost:3000/api/v1/auth/success", {
  credentials: "include",
});
let val = await result.json();
let data = JSON.stringify({
  name: val.data.userProfile.name.givenName,
  surname: val.data.userProfile.name.familyName,
  email: val.data.userProfile.emails[0].value,
  id: val.data.userProfile.id  //AAAA
});
user.value = data.replace(/"/g, "'");
}

async function getSk() {
  let result = await fetch("http://localhost:3000/api/v1/key/sk", {
    credentials: "include",
  });
  let val = await result.json();
  sk.value = val.data.sk;
}

async function getPk() {
  let result = await fetch("http://localhost:3000/api/v1/key/pk");
  let val = await result.json();
  pk.value = val.data.pk;
}

async function encrypt(msg) {
  const buf = Buffer.from(msg);
  bsw_encrypt_attributes(pk.value, buf, [user.value]).then(
    async (ct_cp) => {
      ciphertext.value = {
        policy: ct_cp.get_policy(),
        policy_language: ct_cp.get_policy_language(),
        c: ct_cp.get_c(),
        c_p: ct_cp.get_c_p(),
        c_y: ct_cp.get_c_y(),
        ct: ct_cp.get_ct(),
      };
    }
  );
}

async function decrypt() {
  const ct_cp = new CpAbeCiphertext(
    ciphertext.value.policy,
    ciphertext.value.policy_language,
    ciphertext.value.c,
    ciphertext.value.c_p,
    ciphertext.value.c_y,
    new Uint8Array(Object.values(ciphertext.value.ct))
  );

  bsw_decrypt(sk.value, ct_cp)
    .then((r) => {
      const msg = new TextDecoder().decode(r);
      //text.value = JSON.parse(msg);
      text.value = msg;
    })
    .catch((err) => {
      console.error(err);
    });
}
</script>

<template>
  <div>
    <h1>Homepage</h1>
    <p><span>Email: </span>{{ user }}</p>

    <input v-model="textInput" placeholder="Messaggio da cifrare" />
    <p><span>Messaggio cifrato: </span>{{ ciphertext }}</p>
    <p><span>Messaggio decifrato: </span>{{ text }}</p>
    <button @click="encrypt(textInput)">Encrypt</button>
    <button @click="decrypt()">Decrypt</button>
  </div>
</template>

<style scoped>
span {
  color: blue;
  font-size: 1.2em;
}
#button{

  display: flex;
  justify-content: center;
  align-items: center;
  }
button{
  padding: 0, 10px;
}
p{
  font-weight: 500;
}
input{
  background-color: #844152;;
}
::placeholder{
  color: rgb(61, 61, 61);
}
#container{
  border: 3px rgb(0, 0, 0) solid;
  background-color: #FFFFFF;
  border-radius: 20px;
  width: 415px;
  height: 900px;
  margin: 0;
  padding: 0;
}


</style>

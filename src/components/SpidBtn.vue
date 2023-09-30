<script setup>
import { ref } from "vue";
const idpButtonVisible = ref(false);
</script>

<template>
  <button
    @click="idpButtonVisible = !idpButtonVisible"
    href="#"
    id="spid-button"
  >
    <img src="/img/spid-ico-circle-bb.png" />
    Entra con SPID
  </button>

  <div
    style="margin-top: 150%"
    v-if="idpButtonVisible"
    id="spid-idp-button-medium-get"
    class="spid-idp-button spid-idp-button-tip spid-idp-button-relative"
  >
    <ul class="spid-idp-button-menu">
      <li class="spid-idp-button-link">
        <a
          href="https://spidcnit.rack2.jdk.it/login?entity_id=loginspid.aruba.it&client_id=cnit&redirect_uri=https%3A%2F%2Foauthdebugger.com%2Fdebug&scope=spid&response_type=token&response_mode=query"
        >
          <img
            src="/img/spid-idp-arubaid.svg"
            onerror="this.src='/img/spid-idp-arubaid.png'; this.onerror=null;"
            alt="Aruba ID"
          />
        </a>
      </li>

      <li class="spid-idp-button-link">
        <a
          href="https://spidcnit.rack2.jdk.it/login?entity_id=id.eth.eu&client_id=cnit&redirect_uri=https%3A%2F%2Foauthdebugger.com%2Fdebug&scope=spid&response_type=token&response_mode=query"
        >
          <img
            src="/img/spid-idp-etnaid.svg"
            onerror="this.src='/img/spid-idp-etnaid.png'; this.onerror=null;"
            alt="EtnaHitech S.C.p.A."
          />
        </a>
      </li>

      <li class="spid-idp-button-link">
        <a
          href="https://spidcnit.rack2.jdk.it/login?entity_id=loginspid.infocamere.it&client_id=cnit&redirect_uri=https%3A%2F%2Foauthdebugger.com%2Fdebug&scope=spid&response_type=token&response_mode=query"
        >
          <img
            src="/img/spid-idp-infocamereid.svg"
            onerror="this.src='/img/spid-idp-infocamereid.png'; this.onerror=null;"
            alt="Infocamere S.C.p.A."
          />
        </a>
      </li>

      <li class="spid-idp-button-link">
        <a
          href="https://spidcnit.rack2.jdk.it/login?entity_id=identity.infocert.it&client_id=cnit&redirect_uri=https%3A%2F%2Foauthdebugger.com%2Fdebug&scope=spid&response_type=token&response_mode=query"
        >
          <img
            src="/img/spid-idp-infocertid.svg"
            onerror="this.src='/img/spid-idp-infocertid.png'; this.onerror=null;"
            alt="Infocert ID"
          />
        </a>
      </li>

      <li class="spid-idp-button-link">
        <a
          href="https://spidcnit.rack2.jdk.it/login?entity_id=idp.intesigroup.com&client_id=cnit&redirect_uri=https%3A%2F%2Foauthdebugger.com%2Fdebug&scope=spid&response_type=token&response_mode=query"
        >
          <img
            src="/img/spid-idp-intesigroupspid.svg"
            onerror="this.src='/img/spid-idp-intesigroupspid.png'; this.onerror=null;"
            alt="Intesi Group S.p.A."
          />
        </a>
      </li>

      <li class="spid-idp-button-link">
        <a
          href="https://spidcnit.rack2.jdk.it/login?entity_id=id.lepida.it%2Fidp%2Fshibboleth&client_id=cnit&redirect_uri=https%3A%2F%2Foauthdebugger.com%2Fdebug&scope=spid&response_type=token&response_mode=query"
        >
          <img
            src="/img/spid-idp-lepidaid.svg"
            onerror="this.src='/img/spid-idp-lepidaid.png'; this.onerror=null;"
            alt="Lepida ID"
          />
        </a>
      </li>
      <li class="spid-idp-button-link">
        <a
          href="https://spidcnit.rack2.jdk.it/login?entity_id=idp.namirialtsp.com%2Fidp&client_id=cnit&redirect_uri=https%3A%2F%2Foauthdebugger.com%2Fdebug&scope=spid&response_type=token&response_mode=query"
        >
          <img
            src="/img/spid-idp-namirialid.svg"
            onerror="this.src='/img/spid-idp-namirialid.png'; this.onerror=null;"
            alt="Namirial ID"
          />
        </a>
      </li>
      <li class="spid-idp-button-link">
        <a
          href="https://spidcnit.rack2.jdk.it/login?entity_id=posteid.poste.it&client_id=cnit&redirect_uri=https%3A%2F%2Foauthdebugger.com%2Fdebug&scope=spid&response_type=token&response_mode=query"
        >
          <img
            src="/img/spid-idp-posteid.svg"
            onerror="this.src='/img/spid-idp-posteid.png'; this.onerror=null;"
            alt="Poste ID"
          />
        </a>
      </li>
      <li class="spid-idp-button-link">
        <a
          href="https://spidcnit.rack2.jdk.it/login?entity_id=spid.register.it&client_id=cnit&redirect_uri=https%3A%2F%2Foauthdebugger.com%2Fdebug&scope=spid&response_type=token&response_mode=query"
        >
          <img
            src="/img/spid-idp-spiditalia.svg"
            onerror="this.src='/img/spid-idp-spiditalia.png'; this.onerror=null;"
            alt="SpidItalia"
          />
        </a>
      </li>
      <li class="spid-idp-button-link">
        <a
          href="https://spidcnit.rack2.jdk.it/login?entity_id=identity.sieltecloud.it&client_id=cnit&redirect_uri=https%3A%2F%2Foauthdebugger.com%2Fdebug&scope=spid&response_type=token&response_mode=query"
        >
          <img
            src="/img/spid-idp-sielteid.svg"
            onerror="this.src='/img/spid-idp-sielteid.png'; this.onerror=null;"
            alt="Sielte ID"
          />
        </a>
      </li>
      <li class="spid-idp-button-link">
        <a
          href="https://spidcnit.rack2.jdk.it/login?entity_id=login.id.tim.it%2Faffwebservices%2Fpublic%2Fsaml2sso&client_id=cnit&redirect_uri=https%3A%2F%2Foauthdebugger.com%2Fdebug&scope=spid&response_type=token&response_mode=query"
        >
          <img
            src="/img/spid-idp-timid.svg"
            onerror="this.src='/img/spid-idp-timid.png'; this.onerror=null;"
            alt="Tim ID"
          />
        </a>
      </li>
      <li class="spid-idp-button-link">
        <a
          href="https://spidcnit.rack2.jdk.it/login?entity_id=demo.spid.gov.it&client_id=cnit&redirect_uri=https%3A%2F%2Foauthdebugger.com%2Fdebug&scope=spid&response_type=token&response_mode=query"
        >
          <img
            src="/img/spid-idp-validator.svg"
            onerror="this.src='/img/spid-idp-validator.png'; this.onerror=null;"
            alt="SPID Validator"
          />
        </a>
      </li>

      <li class="spid-idp-support-link">
        <a target="_blank" href="https://www.spid.gov.it"
          >Maggiori informazioni</a
        >
      </li>
      <li class="spid-idp-support-link">
        <a target="_blank" href="https://www.spid.gov.it/richiedi-spid"
          >Non hai SPID?</a
        >
      </li>
      <li class="spid-idp-support-link">
        <a target="_blank" href="https://www.spid.gov.it/serve-aiuto"
          >Serve aiuto?</a
        >
      </li>
    </ul>
  </div>
</template>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Titillium+Web:400,600);
.italia-it-button,
.spid-idp-button .spid-idp-button-menu label,
.spid-idp-button .spid-idp-button-menu li > a {
  font-family: "Titillium Web", HelveticaNeue, Helvetica Neue, Helvetica, Arial,
    Lucida Grande, sans-serif;
  font-weight: 600;
}
#spid-button {
  background-color: var(--blue-secondary);
}

#spid-button:hover {
  background-color: var(--blue-hover);
}
svg {
  width: 1.8em;
  height: 1.8em;
  fill: #333;
}
.italia-it-block {
  display: block;
}
.italia-it-button-size-s {
  font-size: 10px;
  width: 150px;
}
.italia-it-button-size-s > span img {
  width: 19px;
  height: 19px;
  border: 0;
}
.italia-it-button-size-m {
  font-size: 15px;
  width: 220px;
}
.italia-it-button-size-m > span img {
  width: 29px;
  height: 29px;
  border: 0;
}
.italia-it-button-size-l {
  font-size: 20px;
  width: 280px;
}
.italia-it-button-size-l > span img {
  width: 38px;
  height: 38px;
  border: 0;
}
.italia-it-button-size-xl {
  font-size: 25px;
  width: 340px;
}
.italia-it-button-size-xl > span img {
  width: 47px;
  height: 47px;
  border: 0;
}
.button-spid {
  background-color: #06c;
  color: #fff;
}
.button-spid svg {
  fill: #fff;
}
.button-spid:hover {
  background-color: #036;
  color: #fff;
}
.button-spid:active {
  background-color: #83beed;
  color: #036;
}
.spid-idp-button {
  position: absolute;
  z-index: 1039;
}
.spid-idp-button .spid-idp-button-menu,
.spid-idp-button .spid-idp-button-panel {
  list-style: none;
  background: #fff;
  border: 1px solid #ddd;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  overflow: visible;
  padding: 0;
  margin: 0;
}
#spid-idp-button-medium-get,
#spid-idp-button-medium-post,
#spid-idp-button-small-get,
#spid-idp-button-small-post {
  width: 230px;
}
#spid-idp-button-large-get,
#spid-idp-button-large-post {
  width: 270px;
}
#spid-idp-button-xlarge-get,
#spid-idp-button-xlarge-post {
  width: 330px;
}
.spid-idp-button .spid-idp-button-panel {
  padding: 10px;
}
.spid-idp-button.spid-idp-button-tip {
  margin-top: 8px;
}
.spid-idp-button.spid-idp-button-tip:before {
  position: absolute;
  top: -6px;
  left: 9px;
  content: "";
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  border-bottom: 7px solid #ddd;
  display: inline-block;
}
.spid-idp-button.spid-idp-button-tip:after {
  position: absolute;
  top: -5px;
  left: 10px;
  content: "";
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-bottom: 6px solid #fff;
  display: inline-block;
}
.spid-idp-button.spid-idp-button-tip.spid-idp-button-anchor-right:before {
  left: auto;
  right: 9px;
}
.spid-idp-button.spid-idp-button-tip.spid-idp-button-anchor-right:after {
  left: auto;
  right: 10px;
}
.spid-idp-button.spid-idp-button-scroll .spid-idp-button-menu,
.spid-idp-button.spid-idp-button-scroll .spid-idp-button-panel {
  max-height: 180px;
  overflow: auto;
}
.spid-idp-button .spid-idp-button-menu li {
  list-style: none;
  padding: 0;
  margin: 0;
  line-height: 18px;
}
.spid-idp-button .spid-idp-button-menu label,
.spid-idp-button .spid-idp-button-menu li > a {
  display: block;
  font-size: 0.9em;
  color: #06c;
  text-decoration: underline;
  line-height: 18px;
  padding-top: 5px;
  white-space: nowrap;
  border-bottom: 1px solid #ddd;
}
.spid-idp-button .spid-idp-button-menu label:hover,
.spid-idp-button .spid-idp-button-menu li > a:hover {
  color: #036;
  cursor: pointer;
  background-color: #f0f0f0;
}
.spid-idp-button .spid-idp-button-menu li > a img {
  width: 200px;
  padding: 10px 0 10px 10px;
  border: 0;
}
.idp-button-idp-logo {
  font-size: 100%;
  height: 10%;
  width: 100%;
  border: 0;
  border-bottom: 1px solid #ccc;
  background-color: #fff;
  padding: 15px;
  text-align: left;
  cursor: pointer;
}
.idp-button-idp-logo:hover {
  background-color: #f0f0f0;
}
.idp-button-idp-logo img {
  height: 25px;
  vertical-align: middle;
  cursor: pointer;
}
.spid-top-menu-space-10 > a img {
  margin-top: 10px;
}
.spid-top-menu-space-20 > a img {
  margin-top: 20px;
}
.spid-top-menu-line {
  border-top: 5px solid #000;
}
.spid-idp-support-link > a {
  padding: 5px 0 10px 10px;
}
.spid-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}
</style>

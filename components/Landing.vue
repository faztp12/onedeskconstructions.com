<template>
  <div style="padding-top: 10vh; background-color: black">
    <div display="block" class="first">
      <span class="tagline pt-5 px-lg-5 d-none d-lg-inline">
        Your one-stop solution <br /><a class="px-5">for construction.</a>
      </span>
      <span class="tagline px-4 d-lg-none">
        Your one-stop <a class="px-4">solution for</a><br />
        <a class="px-4"> construction.</a>
      </span>
      <img
        class="big d-none d-lg-inline"
        src="~/assets/kam-idris-_HqHX3LBN18-unsplash.jpg"
      />
      <div class="main_button mx-4 mx-lg-5 mt-lg-5">LET'S GET BUILDING</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({});
</script>

<style scoped>
::selection {
  background-color: #33c1af;
}

.navbar-container {
  height: 10vh;
  background-color: black;
  z-index: 999;
}
.d-flex {
  color: white;
}
.nav_item {
  font-family: "Nexa-Regular";
  padding-right: 20px;
  font-size: 12px;
}
.tagline {
  position: relative;
  top: 70px;
  font-family: "Nexa-Black";
  font-size: 65px;
  color: white;

  z-index: 5;
}
.big {
  width: 700px;
  height: 585px;
  position: absolute;
  top: 100px;
  z-index: 1;
}
.main_button {
  border: 3px solid #33c1af;
  color: white;
  font-family: "Nexa-regular";
  letter-spacing: 3px;
  padding: 10px;
  position: relative;
  top: 60px;
  width: 245px;
  z-index: 1000;
}
.first{
  overflow-x:hidden; 
  overflow-y:hidden;
  height: 90vh; 
  width: 100vw;

}

@media (max-width: 576px) {
  .first {
    background-image: url("~assets/mobile-screen landing.jpg");
    background-size: cover;
    background-color: rgba(0, 0, 0, 0.6);
    background-blend-mode: overlay;
  }
  .main_button {
    margin-top: 6em;
  }
  .logo {
    position: relative;
    top: 5px;
    width: 150px;
    height: auto;
    z-index: 100000;
  }
  .tagline {
    position: relative;
    font-size: 40px;
    color: white;
    top: 100px;
    text-align: justify;
    z-index: 5;
    line-height: 1.5;
  }
  .main_button {
    position: relative;
    top: 90px;
  }
  img {
    width: auto;
    max-height: 90vh;
    position: absolute;
    top: 10vh;
    z-index: 1;
    opacity: 40%;
  }
  .current_section {
    font-family: "Nexa-Regular";
    padding-right: 20px;
    font-size: 12px;
  }
}
@media (min-width:576px) and (max-width:992px){
    .first {
    background-image: url("~assets/mobile-screen landing.jpg");
    background-size: cover;
    background-color: rgba(0, 0, 0, 0.6);
    background-blend-mode: overlay;
  }
   .main_button {
    margin-top: 10em;
  }

}
</style>
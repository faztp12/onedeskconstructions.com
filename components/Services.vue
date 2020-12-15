<template>
  <div style="height: 90vh; padding-top: 50px" class="px-lg-5">
    <div class="services">SERVICES</div>
    <div class="services_sections">
      <ServiceTiles
        v-if="activeSection == null"
        @tile-selected="openTile"
      ></ServiceTiles>
      <Turnkey v-if="activeSection == 'turn-key'"></Turnkey>
      <Consultancy v-if="activeSection == 'consultancy'"></Consultancy>
      <Contracting v-if="activeSection == 'contracting'"></Contracting>
    </div>
    <hr v-if="activeSection == null" />
    <div class="filler d-none d-md-block" v-if="activeSection == null">
      - YOUR PROJECT IS SAFE IN OUR HANDS -
    </div>
    <hr v-if="activeSection == null" />
  </div>
</template>

<script>
import Vue from "vue";
import ServiceTiles from "~/components/ServiceTiles.vue";
import Turnkey from "~/components/Turnkey.vue";
import Consultancy from "~/components/Consultancy.vue";
import Contracting from "~/components/Contracting.vue";
export default Vue.extend({
  components: {
    ServiceTiles,
    Turnkey,
    Consultancy,
    Contracting,
  },
  data() {
    return {
      activeSection: null,
    };
  },
  methods: {
    openTile(tile) {
      this.activeSection = tile;
    },
  },
});
</script>

<style scoped>
.services_sections {
  margin-bottom: 70px;
}
.services {
  font-family: "Roboto Condensed", sans-serif;
  color: black;
  width: 70px;
  letter-spacing: 5px;
  border-radius: 10px;
  height: 3px;
  box-shadow: 28px 30px 0 0 #33c1af;
  padding-left: 28px;
  margin-bottom: 70px;
}

img {
  opacity: 0.5;
  position: relative;
}

.article-container {
  width: 430px;
  height: 300px;
  overflow: hidden;
  position: relative;
}

.article-img-holder {
  width: 100%;
  height: 100%;

  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  transition: all 1s;
}

.article-img-holder:hover {
  transform: scale(1.2);
  cursor: pointer;
}

.article-title-link {
  color: white;
  font-family: "Roboto Condensed", sans-serif;
  font-size: 20px;
  letter-spacing: 5px;
  position: absolute;
  top: 42%;
  left: 30px;
}

hr {
  margin: 25px 0 25px 0;
  border-top: 1px solid #707070;
}
.filler {
  font-family: "Quicksand", sans-serif;
  letter-spacing: 10px;
  text-align: center;
  font-weight: bold;
  padding: 20px;
}
</style>
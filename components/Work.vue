<template>
  <div
    style="height: 95vh; padding-top: 50px; background-color: black"
    class="px-5"
  >
    <div class="work">WORK</div>
    <div>
      <div class="carousel-container">
        <b-carousel id="carousel" :interval="2000" background="#ababab">
          <b-carousel-slide v-for="(img, idx) in carousel_images" :key="idx">
            <template v-slot:img>
              <img class="d-block w-100" :src="img" alt="image slot" />
            </template>
          </b-carousel-slide>
        </b-carousel>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      carousel_images: [
        "require('~/assets/sorin-sirbu-ifYt0sKdJYk-unsplash.jpg')",
        "~/assets/taylor-simpson-jybWXT5mrlI-unsplash.jpg",
        "https://ksa-groceryapp.fahimalizain.com/files/hannah-jacobson-2lHU9YXuKV0-unsplash.jpg",
      ],
    };
  },
});
</script>

<style scoped>
img {
  height: 70vh;
  opacity: 0.3;
}

#carousel {
  margin-right: 10em;
  margin-left: 10em;
  margin-top: 2em;
  margin-bottom: 2em;
  background-color: black;
}
.carousel-container {
  height: 60vh;
}
.work {
  font-family: "Roboto Condensed", sans-serif;
  color: white;
  width: 35px;
  letter-spacing: 5px;
  border-radius: 10px;
  height: 3px;
  box-shadow: 28px 30px 0 0 #33c1af;
  padding-left: 28px;
  margin-bottom: 70px;
}
</style>
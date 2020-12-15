<template>
  <div style="height: 100vh; padding-top: 50px" class="px-lg-5 mb-5">
    <div class="team">TEAM</div>
    <div class="team_images d-flex flex-wrap justify-content-center mx-lg-5">
      <div v-for="member in members" :key="member.name" class="box">
        <div class="img-container">
          <img :src="member.img" class="image" />
          <div class="bottom-left">
            <hr />
            <div class="text">{{ member.name }}</div>
            <div class="sub-text">{{ member.designation }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>  

<script>
import Vue from "vue";
export default Vue.extend({
  data: () => {
    return {
      members: [
        {
          name: "AFFAN ALI",
          designation: "CEO",
          img: require("~/assets/sorin-sirbu-ifYt0sKdJYk-unsplash.jpg"),
        },
        {
          name: "HASSAN JASEEM",
          designation: "ARCHITECT",
          img: require("~/assets/mubariz-mehdizadeh-Py8F6-hRn5o-unsplash.jpg"),
        },
        {
          name: "AKIB PK",
          designation: "CEO",
          img: require("~/assets/drew-hays-agGIKYs4mYs-unsplash.jpg"),
        },
        {
          name: "RIJASH",
          designation: "CEO",
          img: require("~/assets/caleb-lucas-6rRuAqtWt60-unsplash.jpg"),
        },
        {
          name: "SHAADAN",
          designation: "CEO",
          img: require("~/assets/etty-fidele-41Is0o6JMBk-unsplash.jpg"),
        },
        {
          name: "HANIN MOHAMMED",
          designation: "FINANCE",
          img: require("~/assets/hunter-matthews-5cVGw3X9yQw-unsplash.jpg"),
        },
      ],
    };
  },
});
</script>

<style scoped>
.team-images{
  margin-top:-20px;
}
.team {
  font-family: "Roboto Condensed", sans-serif;
  color: black;
  width: 35px;
  letter-spacing: 5px;
  border-radius: 10px;
  height: 3px;
  box-shadow: 28px 30px 0 0 #33c1af;
  padding-left: 28px;
  margin-bottom: 70px;
}

.img-container {
  position: relative;
  width: 20vw;
  height: auto;
  overflow: hidden;
  margin-bottom: 20px;
  background-color: black;
}

.image {
  opacity: 0.9;
  display: block;
  transition: 0.5s ease;
  backface-visibility: hidden;
  width: auto;
  height: 35vh;
}

.bottom-left {
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  top: 80%;
  left: 43%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: left;
  width: 70%;
}

.img-container:hover .image {
  opacity: 0.5;
}

.img-container:hover .bottom-left {
  opacity: 1;
}

.text {
  color: white;
  font-family: "Quicksand", sans-serif;
  font-size: 16px;
  font-weight:bold;
  letter-spacing: 4px;
}
.sub-text {
  color: white;
  font-family: "Quicksand", sans-serif;
  font-size: 11px;
  letter-spacing: 4px;
}

hr {
  margin: 25px 100px 0 0;
  width: 100%;
  border-top: 1px solid #707070;
}
@media (max-width:768px){
  .team_images{
    flex-direction:column;
  }
 .img-container {
   width:100vw;
 }
}
@media (min-width:1200px){
  .box {
  flex-basis: 26%;
}
}
</style>
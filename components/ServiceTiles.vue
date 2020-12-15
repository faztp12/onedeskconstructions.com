  <template>
  <div class="tiles d-flex justify-content-between">
    <div class="article-container" @click="openTile('turn-key')">
      <div class="article-img-holder" style="background-color: black">
        <img
          src="~/assets/pixasquare-4ojhpgKpS68-unsplash.jpg"
          width="430px"
          height="300px"
        />
      </div>
      <a class="article-title-link" href="#"
        >TURNKEY<br />
        SERVICES</a
      >
    </div>
    <div class="article-container" @click="openTile('consultancy')">
      <div class="article-img-holder" style="background-color: black">
        <img src="~/assets/h12-slide-1.jpg" width="430px" height="300px" />
      </div>
      <a class="article-title-link" href="#"
        >CONSULTANCY<br />
        SERVICES</a
      >
    </div>
    <div class="article-container" @click="openTile('contracting')">
      <div class="article-img-holder" style="background-color: black">
        <img
          src="~/assets/ricardo-gomez-angel-xIaCoCA7NIQ-unsplash.jpg"
          width="430px"
          height="300px"
        />
      </div>

      <a class="article-title-link" href="#"
        >GENERAL CONTRACTING<br />
        SERVICES</a
      >
    </div>
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  methods: {
    openTile(tile) {
      this.$emit("tile-selected", tile);
    }
  }
});
</script>


<style scoped>
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
@media (max-width: 768px){
  .tiles{
    flex-direction:column;
  }
  
.article-img-holder{
  margin:auto 0 30px 0;
}
.article-container {
  width:100vw;
  max-height:200px;
  overflow: hidden;
  position: relative;
  margin-bottom:5px;
}

}
</style>
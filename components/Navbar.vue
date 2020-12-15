<template>
  
  <nav>
    <input type="checkbox" id="check" />
    <label for="check" class="checkbtn"
      ><i class="material-icons">dehaze</i></label
    >
    <label class="logo">
      <img src="~/assets/onedesk_logo.png" width="200px" height="80px"
    /></label>
    <ul class="d-flex">
      <li><a href="#">HOME</a></li>
      <li><a href="#">SERVICES</a></li>
      <li><a href="#">WORK</a></li>
      <li><a href="#">TEAM</a></li>
      <li><a href="#">CONTACT</a></li>
    </ul>
  </nav>
</template>
<script>
import Vue from "vue";
export default Vue.extend({});
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  text-decoration: none;
  list-style: none;
  box-sizing: border-box;
}

nav {
  background-color: black;
  height: 10vh;
  width: 100%;
  position: fixed;
  z-index: 10000;
}
nav ul {
  float: right;
  margin-right: 50px;
}
nav ul li {
  display: inline-block;
  line-height: 10vh;
  margin: 0 1.3em;
}
nav a {
 font-family:"Nexa-Regular";
  color: white !important;
  font-size:0.7em;
  z-index: 10000;
  font-weight:bold;
}

.checkbtn {
  font-size: 30px;
  color: white;
  float: right;
  line-height: 10vh;
  margin-right: 40px;
  cursor: pointer;
  display: none;
}
#check {
  display: none;
}
@media (max-width: 952px) {
 
  label.logo {
    padding-left: 50px;
  }
}
@media (max-width: 858px) {
   nav ul{
    flex-direction:column;
  }
  label.logo {
    padding-left: 10px;
  }
  .checkbtn {
    display: block;
  }
  nav a{
    font-size:0.8em;
  }
  ul {
    position: fixed;
    top: 10vh;
    left:-100%;
    width: 100vw;
    height: 100vh;
    background-color: rgb(0, 0, 0);
    text-align: center;
    transition: all 0.5s;
    }
    nav li{
      display:block;
    }
    nav a:hover,a.active{
      background:none;
      color:#33c1af;
    }
    #check:checked ~ ul{
      left:0;
    }
  
}

</style>
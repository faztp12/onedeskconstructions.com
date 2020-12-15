<template>
  <div class="tabbed">
    <input type="radio" name="tabs" id="tab_one" checked />
    <label for="tab_one">ARCHITECTURE</label>

    <input type="radio" name="tabs" id="tab_two" checked />
    <label for="tab_two">MEP</label>

    <input type="radio" name="tabs" id="tab_three" checked />
    <label for="tab_three">CONSTRUCTION</label>

    <div class="tabs">
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis
          nulla, pharetra sed lectus vitae, malesuada volutpat est. Nulla eu
          nibh quis tortor porttitor porttitor a vel odio. Vivamus fringilla
          lobortis commodo. Phasellus id pulvinar lacus. Quisque viverra
          convallis odio in malesuada. Vestibulum sed laoreet turpis, et
          fringilla ipsum. Donec venenatis dui vitae nulla sodales, quis
          fermentum dui volutpat. Quisque auctor ante a ex varius, eu congue
          ligula aliquet.
        </p>
      </div>
      <div>
        <p>
          Donec aliquam dapibus auctor. In venenatis commodo sapien, fringilla
          tincidunt enim iaculis in. Duis pharetra elementum sollicitudin.
          Quisque maximus iaculis elit, id congue massa mattis a. Nunc ac lectus
          eros. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos himenaeos. Nullam lorem dui, interdum et aliquam
          egestas, placerat eu ex.
        </p>
      </div>
      <div>
        <p>
          Maecenas accumsan nibh sed nisl porta, vel lacinia diam feugiat.
          Phasellus quis tincidunt justo. Nullam pharetra purus et urna
          pulvinar, eget vehicula tortor vehicula. Donec pretium lectus id
          lectus porttitor mattis. Quisque ex tortor, vulputate ut nisi ac,
          viverra accumsan risus. Donec mollis tortor eget vulputate
          consectetur. Fusce elit dui, ultricies non consequat eu, imperdiet non
          metus. Nulla eu elementum est. Etiam id accumsan odio. Vivamus lacinia
          vehicula magna eget cursus.
        </p>
      </div>
     <img class="illustration" src="~/assets/illustration.png" />
    </div>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}
::selection {
  background-color: #33c1af;
}
.tabbed {
  font-size: 1em;
  width: 100vw;
  margin: 50px auto;
  margin-left: 2em;
}

.tabbed > input {
  display: none;
}
.tabbed > label {
  display: block;
  float: left;
  padding: 8px 20px;
  margin-right: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  font-family: "Nexa-regular";
  font-size: 12px;
  letter-spacing: 2px;
}

.tabbed > label:hover,
.tabbed > input:checked + label {
  background-color: #33c1af;
}
.tabs { 
  clear: both;
  perspective: 1000px;
  letter-spacing: 2px;

}

.tabs > div {
  width: 90vw;
  height: 68vh;
  position: absolute;
  border-top: 2px solid #33c1af;
  padding: 10px 300px 40px 0px;
  line-height: 2;
  margin-top: -10px;
  opacity: 0;
  z-index: 0;
  transform: rotateX(20deg);
  transform-origin: top center;
  transition: opacity 0.3s, transform 1s;
  text-align:justify;
}

#tab_one:checked ~ .tabs > div:nth-of-type(1),
#tab_two:checked ~ .tabs > div:nth-of-type(2),
#tab_three:checked ~ .tabs > div:nth-of-type(3) {
  transform: rotateX(0deg);
  opacity: 1;
  z-index: 1;
}
p {
  margin-top: 40px;
  margin-left: 30px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 17px;
}
.illustration{
  margin:290px 50px 0px 800px;
  display: none;
}
</style>
       
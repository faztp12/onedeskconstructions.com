<template>
  <b-container
    fluid
    style=" width;100vw; height:40vh; background-color: rgb(240, 240, 240);"
  >
    <b-row class="h-100 mx-4">
      <b-col cols="5" class="pr-4 mb-5 mt-4">
        <googlemaps-map
          class="map"
          :options="map_options"
          :center.sync="center"
          :zoom.sync="zoom"
        >
          <googlemaps-marker
            :icon="markerIcon"
            :position="odcs_office"
          />
        </googlemaps-map>
      </b-col>
      <b-col class="address my-4"
        ><div class="mb-2" style="color: black; font-weight: bold">ADDRESS</div>
        8/1829, 2nd Floor<br />
        KK Complex, Kondotty Busstand<br />Kondotty, Kerala- 673638
        <div class="my-3">+91 9447 858 125<br />+91 9675 345 765</div>
        <div class="my-3">odcsllp@gmail.com</div>
      </b-col>
      <b-col class="my-4"
        ><div class="address mb-2" style="color: black; font-weight: bold">
          KEEP IN TOUCH
        </div>
        <img
          class="circles pointer-link ml-0"
          style="height: 40px; width: 40px"
          src="~/assets/insta-logo.png" />
        <img
          class="circles pointer-link"
          style="height: 40px; width: 40px"
          src="~/assets/whatsapp-logo.jpg" />
        <img
          class="circles pointer-link"
          style="height: 40px; width: 40px"
          src="~/assets/twitter-logo.png" />
        <img
          class="circles pointer-link"
          style="height: 40px; width: 40px"
          src="~/assets/facebook-logo.png"
      /></b-col>
    </b-row>
  </b-container>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      odcs_office: {
        lat: 11.146174,
        lng: 75.963143,
      },
      center: {
        lat: 11.146174,
        lng: 75.963143,
      },
      zoom: 12,
      markerIcon: "http://www.googlemapsmarkers.com/v1/33C1AF/",
      map_options: {
        disableDefaultUI: true,
        styles: [
          {
            elementType: "geometry",
            stylers: [
              {
                color: "#f5f5f5",
              },
            ],
          },
          {
            elementType: "labels.icon",
            stylers: [
              {
                visibility: "off",
              },
            ],
          },
          {
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#616161",
              },
            ],
          },
          {
            elementType: "labels.text.stroke",
            stylers: [
              {
                color: "#f5f5f5",
              },
            ],
          },
          {
            featureType: "administrative",
            elementType: "geometry",
            stylers: [
              {
                visibility: "off",
              },
            ],
          },
          {
            featureType: "administrative.land_parcel",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#bdbdbd",
              },
            ],
          },
          {
            featureType: "administrative.neighborhood",
            stylers: [
              {
                visibility: "off",
              },
            ],
          },
          {
            featureType: "poi",
            stylers: [
              {
                visibility: "off",
              },
            ],
          },
          {
            featureType: "poi",
            elementType: "geometry",
            stylers: [
              {
                color: "#eeeeee",
              },
            ],
          },
          {
            featureType: "poi",
            elementType: "labels.text",
            stylers: [
              {
                visibility: "off",
              },
            ],
          },
          {
            featureType: "poi",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#757575",
              },
            ],
          },
          {
            featureType: "poi.park",
            elementType: "geometry",
            stylers: [
              {
                color: "#e5e5e5",
              },
            ],
          },
          {
            featureType: "poi.park",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#9e9e9e",
              },
            ],
          },
          {
            featureType: "road",
            elementType: "geometry",
            stylers: [
              {
                color: "#ffffff",
              },
            ],
          },
          {
            featureType: "road",
            elementType: "labels",
            stylers: [
              {
                visibility: "off",
              },
            ],
          },
          {
            featureType: "road",
            elementType: "labels.icon",
            stylers: [
              {
                visibility: "off",
              },
            ],
          },
          {
            featureType: "road.arterial",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#757575",
              },
            ],
          },
          {
            featureType: "road.highway",
            elementType: "geometry",
            stylers: [
              {
                color: "#dadada",
              },
            ],
          },
          {
            featureType: "road.highway",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#616161",
              },
            ],
          },
          {
            featureType: "road.local",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#9e9e9e",
              },
            ],
          },
          {
            featureType: "transit",
            stylers: [
              {
                visibility: "off",
              },
            ],
          },
          {
            featureType: "transit.line",
            elementType: "geometry",
            stylers: [
              {
                color: "#e5e5e5",
              },
            ],
          },
          {
            featureType: "transit.station",
            elementType: "geometry",
            stylers: [
              {
                color: "#eeeeee",
              },
            ],
          },
          {
            featureType: "water",
            elementType: "geometry",
            stylers: [
              {
                color: "#c9c9c9",
              },
            ],
          },
          {
            featureType: "water",
            elementType: "labels.text",
            stylers: [
              {
                visibility: "off",
              },
            ],
          },
          {
            featureType: "water",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#9e9e9e",
              },
            ],
          },
        ],
      },
    };
  },
});
</script>

<style scoped>
.circles {
  border-radius: 50%;
  border-color: #33c1af;
  border-spacing: 0cm;
  border: 3px solid #33c1af;
  margin: auto 10px;
}
.address {
  color: rgb(104, 98, 98);

  font-size: 14px;
  line-height: 1.1;
  letter-spacing: 2px;
}
.map {
  height: 30vh;
}
.pointer-link {
  cursor: pointer;
}
</style>
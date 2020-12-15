import 'vue-googlemaps/dist/vue-googlemaps.css'
import VueGoogleMaps from 'vue-googlemaps'
import Vue from "vue";

Vue.use(VueGoogleMaps, {
  load: {
    apiKey: 'AIzaSyDUGvJK_0WwZFHKi1NPVxzHrE8bNXOUO-A',
    libraries: ['places'],
  },
})
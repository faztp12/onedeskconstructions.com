<template>
  <div>
    <Landing></Landing>
    <Services></Services>
    <Work></Work>
    <!-- <Team></Team> -->
    <Contact></Contact>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Landing from "~/components/Landing.vue";
import Services from "~/components/Services.vue";
import Work from "~/components/Work.vue";
import Team from "~/components/Team.vue";
import Contact from "~/components/Contact.vue";
export default Vue.extend({
  components: {
    Landing,
    Services,
    Work,
    Team,
    Contact,
  },
  data: () => {
    return {};
  },
});
</script>

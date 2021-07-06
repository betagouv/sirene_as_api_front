<template>
  <div id="app">
    <app-header />
    <div class="notification full-width notification-header">
      Le moteur de recherche des entreprises est désormais disponible sur
      <a href="https://annuaire-entreprises.data.gouv.fr"
        >annuaire-entreprises.data.gouv.fr</a
      >
    </div>
    <router-view v-if="dataFromApiAvailable"></router-view>
    <not-found v-else />
    <app-footer />
  </div>
</template>

<script>
import AppHeader from "@/components/layout/AppHeader";
import AppFooter from "@/components/layout/AppFooter";
import NotFound from "@/components/NotFound";

export default {
  name: "App",

  metaInfo: {
    title: null,
    titleTemplate: "%s | Entreprise.data.gouv.fr"
  },

  computed: {
    dataFromApiAvailable() {
      return this.$store.state.apiDataIsAvailable;
    }
  },

  components: {
    "app-header": AppHeader,
    "app-footer": AppFooter,
    "not-found": NotFound
  }
};
</script>

<style lang="scss" scoped>
#app {
  min-height: 100vh;
}
.notification-header {
  font-size: 1.2rem;
  color: #0053b3;
  background-color: #ffcb00;
}
</style>

<template>
  <div class="company__panel panel panel-header">
    <h2>Base SIRENE</h2>
    <p>Information Disponible</p>
    <p>Dernière mise à jour : {{ lastUpdateSirene }}</p>
  </div>
</template>

<script>

export default {
  name: 'EtablissementSireneHeader',
  computed: {
    resultSirene () {
      return this.$store.getters.singlePageEtablissementSirene
    },
    lastUpdateSirene () {
      if (this.resultSirene.updated_at) {
        return this.resultSirene.updated_at.substring(0, 10)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  h2, p {
    margin: auto;
  }
  .panel {
    border: 2px solid $color-lighter-blue;
    padding: 16px;
    text-align: center;
  }
</style>

<template>
  <div class="company__panel panel panel-header">
    <h2>Base RNA</h2>
    <p>Information Disponible</p>
    <p>Dernière mise à jour : {{ lastUpdateRNA }}</p>
  </div>
</template>

<script>

export default {
  name: 'EtablissementRNAHeader',
  computed: {
    resultRNA () {
      return this.$store.getters.singlePageEtablissementRNA
    },
    lastUpdateRNA () {
      if (this.resultRNA.updated_at) {
        return this.resultRNA.updated_at.substring(0, 10)
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
    border: 2px solid $color-light-pink;
    padding: 16px;
    text-align: center;
  }
</style>

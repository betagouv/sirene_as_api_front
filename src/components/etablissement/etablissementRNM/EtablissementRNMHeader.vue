<template>
  <div class="company__panel panel panel-header">
    <h2>Base RNM</h2>
    <p>Information Disponible</p>
    <p>Dernière mise à jour : aujourd'hui</p>
  </div>
</template>

<script>

export default {
  name: 'EtablissementRNMHeader'
}
</script>

<style lang="scss" scoped>
  h2, p {
    margin: auto;
  }
  .panel {
    border: 2px $color-light-green solid;
    padding: 16px;
    text-align: center;
  }
</style>

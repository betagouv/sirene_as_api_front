<template>
  <div>
    <div v-for="(key, name) in elements" :key="key">
      <div v-if="parent[key]" >
        <div class="company__item-key">{{ name }}:</div>
        <div class="company__item-value">{{ parent[key] }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PanelInfoRNCS',
  props: ['parent', 'elements']
}
</script>

<style lang="scss" scoped>
.company__item-key {
  display: inline;
}
.company__item-value {
  display: inline;
}
</style>


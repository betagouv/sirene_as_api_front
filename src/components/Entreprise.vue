<template>
  <div>
    <router-link to=/>Revenir aux résultats</router-link>
    <div v-if="result">
      <!-- debugResults : {{singleResult}} -->
      <p>Nom entreprise : {{result.nom_raison_sociale}}</p>
      <ul>
        <li> Siret : {{ result.siret }}</li>
        <li> Siren : {{ result.siren }}</li>
        <li> Clef NIC : {{ result.nic }}</li>
        <li> Gérant : {{ fullOwnerName  | ifExist}}</li>
        <li> Code postal : {{ result.code_postal }}</li>
        <li> Cedex : {{ result.cedex | ifExist}}</li>
        <li> Departement : {{ result.departement }}</li>
        <li> Date de création : {{ result.date_creation }}</li>
        <li> Numéro TVA Intracommunautaire : {{ tvaIntracommunautaire }}
        <li> Téléphone : {{ result.telephone | ifExist}}</li>
        <li> Email : {{ result.email | ifExist}}</li>
        <li> Code activité principale : {{ result.activite_principale_entreprise }}</li>
        <li> Libellé activité principale : {{ result.libelle_activite_principale_entreprise }}</li>
        <li> Tranche effectif salarié : {{ result.libelle_tranche_effectif_salarie }}</li>
        <li> Date de création : {{ formattedDate }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Filters from '@/components/mixins/filters.js'

export default {
  name: 'Entreprise',
  computed: {
    result () {
      return this.$store.getters.singlePageResultEtablissement
    },
    tvaIntracommunautaire () {
      const tvaKey = (12 + 3 * (this.result.siren % 97)) % 97
      const tvaNumber = `${tvaKey}${this.result.siren}`
      return `FR${tvaNumber}`
    },
    // Display nom only if present. Prenom is not required. Concatenate the two if presents.
    fullOwnerName () {
      if (!this.result.nom) {
        return null
      }
      const nomOwner = this.result.nom.toUpperCase()
      if (this.result.prenom !== undefined) {
        return `${nomOwner}`
      } else {
        const prenomOwner = this.result.prenom.capitalize
        return `${nomOwner}${' '}${prenomOwner}`
      }
    },
    formattedDate () {
      const year = this.result.date_creation.substring(0, 4)
      const month = this.result.date_creation.substring(4, 6)
      const day = this.result.date_creation.substring(6, 8)
      return `${day}${'/'}${month}${'/'}${year}`
    }
  },
  created () {
    this.$store.commit('executeSearchBySiret', this.$route.params.siret)
  },
  mixins: [Filters]
}
</script>

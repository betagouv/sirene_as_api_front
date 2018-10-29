<template>
  <div>
    <h4>Personne morale</h4>
    <hr>
    <panel-info-rncs :parent=RNCSLegal :elements=this.elementsToDisplay />
  </div>
</template>

<script>
import PanelInfoRNCS from '@/components/templates/PanelInfoRNCS'

export default {
  name: 'EtablissementRNCSPMorale',
  components: { 'PanelInfoRncs': PanelInfoRNCS },
  data () {
    return {
      elementsToDisplay:
        {
          "Dénomination": "denomination",
          "Sigle": "sigle",
          "Forme Juridique": "forme_juridique",
          "Associé Unique":"associe_unique",
          "Activité Principale": "activite_principale",
          "Type Capital": "type_capital",
          "Capital": "capital",
          "Capital actuel": "capital_actuel",
          "Devise": "devise",
          "Date Clotûre": "date_cloture",
          "Date Clotûre Exceptionnelle": "date_cloture_exeptionnelle",
          "Economie Sociale Solidaire": "economie_sociale_solidaire",
          "Durée Personne Morale": "duree_pm",
          "Libellé Dernière Modification": "libelle_derniere_modification",
          "Date Dernière Modification": "date_derniere_modification"
        }
    }
  },
  computed: {
    RNCSLegal () {
      return this.$store.getters.RNCSData.personne_morale
    }
  }
}
</script>
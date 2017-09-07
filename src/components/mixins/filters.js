export default {
  filters: {
    capitalize: function (string) {
      if (string !== null) {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
      }
    },
    upperCase: function (string) {
      if (string !== null) {
        return string.toUpperCase()
      }
    },
    ifExist: function (string) {
      if (string === null) {
        return 'Non renseigné'
      }
    }
  }
}

const localAdresses = {
  baseAdress: 'http://localhost:3000/full_text/',
  baseAdressSiret: 'http://localhost:3000/siret/',
  baseAdressSiren: 'http://localhost:3000/siren/'
}

const productionAdresses = {
  baseAdress: 'https://sirene.entreprise.api.gouv.fr/full_text/',
  baseAdressSiret: 'https://sirene.entreprise.api.gouv.fr/siret/',
  baseAdressSiren: 'https://sirene.entreprise.api.gouv.fr/siren/'
}

const adressesToExport = process.env.NODE_ENV === 'production'
  ? productionAdresses : localAdresses

export default adressesToExport

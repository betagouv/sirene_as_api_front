import { createLocalVue, shallow } from '@vue/test-utils'
import Vuex from 'vuex'
import Etablissement from '@/components/Etablissement'
import { __createMocks as createStoreMocks } from '@/store/index.js';

const localVue = createLocalVue()
localVue.use(Vuex)
jest.mock('@/store/index.js')

describe('Etablissement.vue', () => {
  let storeMocks
  let wrapperEtablissement
  let etablissement
  const $route = { 
    params: {
      siret: '83305720100018'
    }
  }
  
  // Create a fresh store and wrapper instance for every test case.
  beforeEach(() => {
    storeMocks = createStoreMocks();
    
    wrapperEtablissement = shallow(Etablissement, {
      localVue,
      store: storeMocks.store,
      mocks: { $route }
    })
    etablissement = wrapperEtablissement.vm
  })
  
  test('it should compute the full name correctly', () => {
    etablissement.result.nom = 'Michel'
    etablissement.result.prenom = 'Forever'
    expect(etablissement.fullOwnerName).toEqual('Michel Forever')
  }),
  test('it should compute the TVA number correctly', () => {
    etablissement.result.siren = '833057201'
    expect(etablissement.tvaIntracommunautaire).toEqual('FR80833057201')
  })
})

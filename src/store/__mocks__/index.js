/*eslint-disable no-undef*/
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const getters = {
  singlePageResultEtablissement: jest.fn().mockReturnValue([{}])
}

export const mutations = {
  addItems: jest.fn()
}

export const actions = {
  hideSuggestions: jest.fn(),
  executeSearchBySiret: jest.fn(),
  executeSearchBySiren: jest.fn()
}

export const state = {
  results: jest.fn().mockReturnValue([{}])
}

// eslint-disable-next-line no-underscore-dangle
export function __createMocks(custom = { getters: {}, mutations: {}, actions: {}, state: {} }) {
  const mockGetters = Object.assign({}, getters, custom.getters)
  const mockMutations = Object.assign({}, mutations, custom.mutations)
  const mockActions = Object.assign({}, actions, custom.actions)
  const mockState = Object.assign({}, state, custom.state)

  return {
    getters: mockGetters,
    mutations: mockMutations,
    actions: mockActions,
    state: mockState,
    store: new Vuex.Store({
      getters: mockGetters,
      mutations: mockMutations,
      actions: mockActions,
      state: mockState,
    }),
  }
}

export const store = __createMocks().store
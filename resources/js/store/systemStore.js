import gql from 'graphql-tag'
import {apiClient} from "../api";

const state = {
  entities: {},
}

// getters
const getters = {
  entities: (state) => {
    return state.entities ? state.entities : {}
  },
}

// actions
const actions = {
  async getIntrospection ({ state, commit }) {
    let resp = await apiClient.query({
      query: gql`query {
          introspection {
              code
              hasDates
              isSoftDeleted
              fields
          }
      }`
    })
    let {data: {introspection}} = resp;
    let entities = {};
    introspection.forEach(type => {
      entities[type.code] = JSON.parse(JSON.stringify(type));
      entities[type.code].fields = JSON.parse(entities[type.code].fields);
    })
    commit('setEntities', entities)
    return JSON.parse(JSON.stringify(entities));
  }
}

// mutations
const mutations = {
  setEntities (state, entities) {
    state.entities = entities
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
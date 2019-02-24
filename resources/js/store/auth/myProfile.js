import gql from 'graphql-tag'
import {apiClient} from "../../api";
import {DynamicFieldFragment} from "../../core/fragments/DynamicField";

const state = {
  fields: [],
}

// getters
const getters = {
  fields: (state) => {
    return state.fields ? state.fields : []
  },
}

// actions
const actions = {
  async getEditFields ({ state, commit }) {
    let resp = await apiClient.query({
      query: gql`query {
          getFields(for: "profile") {
              ...DynamicField
          }
      }
      ${DynamicFieldFragment}
      `
    })
    let {data: {getFields}} = resp;
    commit('setFields', getFields)
    return JSON.parse(JSON.stringify(getFields));
  }
}

// mutations
const mutations = {
  setFields (state, fields) {
    state.fields = fields
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
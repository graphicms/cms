import gql from 'graphql-tag'
import {apiClient} from "../../api";
import {fieldsFromAll} from "../../helpers/fieldsFromAll";

const state = {
  user: {},
}

// getters
const getters = {
  user: (state) => {
    return state.user ? state.user : {}
  },
}

// actions
const actions = {
  async getCurrentUser ({ state, commit }) {
    let {data: {info}} = await apiClient.query({
      query: gql`
          query {
              info: introspection(for: "user") {
                  code,
                  fields
              }
          }
      `
    });
    let userInfo = JSON.parse(JSON.stringify(info[0]));
    userInfo.fields = JSON.parse(userInfo.fields)
    let userFields = fieldsFromAll(userInfo.fields);
    let resp = await apiClient.query({
      query: gql`query {
          auth {
              user {
                  ${userFields}
              }
          }
      }`
    })
    let {data: {auth: {user}}} = resp;
    commit('setUser', user)
    return JSON.parse(JSON.stringify(user));
  },
  async logout({state, commit}) {
    let resp = await apiClient.mutate({
      mutation: gql`
        mutation {
            logout {
                result
            }
        }
      `
    })
    commit('setUser', {})
  }
}

// mutations
const mutations = {
  setUser (state, user) {
    state.user = user
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
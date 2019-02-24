import gql from 'graphql-tag'
import {apiClient} from "../api";
import {MenuItemFragment} from "../core/fragments/MenuItem";
// import {DynamicFieldFragment} from "../../core/fragments/DynamicField";

const state = {
  items: [],
}

// getters
const getters = {
  items: (state) => {
    return state.items ? state.items : []
  },
}

// actions
const actions = {
  async getMenuItems ({ state, commit }) {
    let resp = await apiClient.query({
      query: gql`query {
          menu {
              ...MenuItem
              children {
                  ...MenuItem
                  children {
                      ...MenuItem
                      children {
                          ...MenuItem
                      }
                  }
              }
          }
      }
        ${MenuItemFragment}
      `
    })
    let {data: {menu}} = resp;
    commit('setItems', menu)
    return JSON.parse(JSON.stringify(menu));
  }
}

// mutations
const mutations = {
  setItems (state, items) {
    state.items = items
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
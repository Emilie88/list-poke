import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pokeDetails: {},
  },
  getters: {
    pokeDetails(state) {
      return state.pokeDetails;
    },
  },
  mutations: {
    setPokeDetails(state, payload) {
      state.pokeDetails = payload;
    },
  },
  actions: {
    show(context) {
      context.commit("setPokeDetails");
    },
  },
  modules: {},
});

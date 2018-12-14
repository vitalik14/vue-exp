import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    counter: 73
  },
  mutations: {},
  actions: {},
  getters: {
      COUNTER: state => {
          return state.counter; 
      }
  }
});

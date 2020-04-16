import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie'
import todo from './modules/todo'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        todo
    },    
    plugins: [
        createPersistedState({
            getState: (key) => Cookies.getJSON(key),
            setState: (key, state) => Cookies.set(key, state)
        })
    ]
})
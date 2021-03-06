/* eslint-disable */
import axios from 'axios'

const state = {
    products: [],
    token: ''
}
const mutations = {
    setProducts(state, products) {
        state.products = products
    },
    setToken(state, token) {
        state.token = token
    }

}
const actions = {
    FetchProducts({ commit, rootState }) {
        const headers = {
            Authorization: `Bearer ${rootState.authentication.token}`
        }
        axios.get('https://prueba-adoniss.herokuapp.com/api/products', {
            headers: headers
        }).then(res => {
            commit('setProducts', res.data)
            }).catch(err => {
            console.log(err)
                })
    },
    filterProducts({ commit, rootState }, query) {
        const headers = {
            Authorization: `Bearer ${rootState.authentication.token}`
        }
        if (query === '') {
            axios.get('https://prueba-adoniss.herokuapp.com/api/products', {
                headers: headers
            }).then(res => {
            commit('setProducts', res.data)
        }).catch(err => {
            console.log(err)
        })
        } else {
            const params = {
                query
            }
            axios.get(`https://prueba-adoniss.herokuapp.com/api/search/${params.query}`, {
                params: params,
                headers: headers
            }).then(res => {
                commit('setProducts', res.data)
            }).catch(err => {
                console.log(err)
            })
        }
    }
}
const getters = {
    products: (state) => {
        return state.products
      },
    token: (state) => {
        return state.token
      },
    searchview: (state) => {
        return state.searchview
      }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}

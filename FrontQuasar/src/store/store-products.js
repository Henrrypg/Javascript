import axios from 'axios'

const state = {
    products: [{
        id: 1,
        name: "das"
    },]
}
const mutations = {
    SET_PRODUCTS(state, products) {
        state.products = products
    },
}
const actions = {
    FetchProducts({commit}) {
        axios.get('http://127.0.0.1:3333/api/products').then(res => {
            commit('SET_PRODUCTS', res.data)
        }).catch(err => {
            console.log(err)
        });
    },
    filterProducts({commit}, query){
        let params = {
            query
        };
        axios.get(`http://127.0.0.1:3333/api/search/${params.query}`, params).then(res => {
            commit('SET_PRODUCTS', res.data)
        }).catch(err => {
            console.log(err) 
        })
    }
}
const getters = {
    products: (state) => {
        return state.products
      },
}
export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}

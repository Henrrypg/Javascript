import axios from 'axios'

const state = {
    products: [],
    token: "",
    searchview: true
}
const mutations = {
    setProducts(state, products) {
        state.products = products
    },
    setToken(state, token) {
        state.token = token
    },
}
const actions = {
    FetchProducts({commit, rootState}) {
        console.log(rootState.authentication.token)
        let headers = {
            Authorization : `Bearer ${rootState.authentication.token}`
        }    
        axios.get('http://127.0.0.1:3333/api/products', {
            headers: headers
        }).then(res => {
            commit('setProducts', res.data)
            }).catch(err => {
            console.log(err)
                });
    },
    filterProducts({commit}, query){
        if (query === ''){
            axios.get('http://127.0.0.1:3333/api/products').then(res => {
            commit('setProducts', res.data)
        }).catch(err => {
            console.log(err)
        });
        }else{
            let params = {
                query
            };
            axios.get(`http://127.0.0.1:3333/api/search/${params.query}`, params).then(res => {
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
}
export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}

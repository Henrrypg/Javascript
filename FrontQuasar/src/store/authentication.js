import axios from 'axios'
const state = {
    Email: null,
    Password: null,
    token: null,
}
const mutations = {
    setEmail(state, email){
        state.Email = email;
    },
    setPassword(state, password){
        state.Password = password;
    },
    setToken(state, token){
        state.token = token;
    },
    unsetToken(state){
        state.token = null;
    }
}
const actions = {
    register({commit, state}){
        axios.post('http://127.0.0.1:3333/api/auth/register', {
            email: state.Email,
            password: state.Password
        }).then(({data}) => {
            commit('setToken', data.token);
            this.$router.push('/');
        })
    },
    login({commit, state}){
        axios.post('http://127.0.0.1:3333/api/auth/login', {
            email: state.Email,
            password: state.Password
        }).then(({data}) => {
            commit('setToken', data.token);
            this.$router.push('/');
        })
    },
    logout({commit}){
        commit('unsetToken');
        this.$router.push('/login');
    }
}
const getters = {
    isLoggedIn(state){
        return !!state.token;
    }
}
export default{
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}
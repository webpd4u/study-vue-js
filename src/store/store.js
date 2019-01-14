import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        // value: 0
        counter:0,
        change:false
    },
    getters : {
        doubleCounter: state => {
            return state.counter * 2;
        },
        stringCounter : state => {
            return state.counter + ' Clicks';
        },
        change : state => {
            console.log('state.change flag:' +state.change);
            return state.change;
        }

    },
    mutations: { //must be syncronous
        increment : (state, payload) => {
            state.counter += payload;
            state.change = true;
        },
        decrement : (state, payload) => {
            state.counter -= payload;
            state.change = true;
        },
        save : (state, payload) => {
            // do jobs
            console.log('mutation save called');
            state.change = false;
        }
    },
    actions: {
        // increment : context => {
        //     context.commit('increment');
        // }
        increment : ({ commit }, payload) => {
            console.log('increment ' + payload);
            commit('increment', payload);
        },
        decrement : ({ commit }, payload) => {
            commit('decrement', payload);
        },
        asyncIncrement : ({ commit }, payload) => {
            setTimeout(() => {
                console.log('asyncIncrement ' + payload);
                commit('increment', payload.by);
            }, payload.duration);
        },
        asyncDecrement : ({ commit }, payload) => {
            setTimeout(() => {
                commit('decrement', payload.by);
            }, payload.duration);
        },
        save : context => {
            console.log('action save called');
            context.commit('save');
        }
    }
    // mutations,
    // actions,
    // modules: {
    //     counter
    // }
});
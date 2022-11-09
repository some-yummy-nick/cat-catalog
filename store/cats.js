import data from '~/data/cats.json'
import {filterCats, orderCats} from '~/helpers'

export const state = () => ({
    list: data.products,
    filteredLists: data.products,
    filter: {
        search: '',
        order: true
    }
})

export const actions = {
    setOrder({commit}) {
        commit('setOrder')
    },
    orderCats({commit}) {
        commit('orderCats')
    },
    filterSearch({commit}, search) {
        commit('setFilterSearch', search)
        commit('filterCats')
        commit('orderCats')
    },
}

export const mutations = {
    setOrder(state) {
        state.filter.order = !state.filter.order
    },
    setFilterSearch(state, search) {
        state.filter.search = search
    },
    filterCats(state) {
        const cats = [...state.list]
        state.filteredLists = filterCats(state.filter, cats)
    },
    orderCats(state) {
        const cats = [...state.filteredLists]
        state.filteredLists = orderCats(state.filter.order, cats)
    }
}

export const getters = {
    getCats: (state) => {
        return state.list
    },
    getOrder: (state) => {
        return state.filter.order
    },
    getFilteredCats: (state) => {
        return state.filteredLists
    },
    getFilteredSearch: (state) => {
        return state.filter.search
    },
}
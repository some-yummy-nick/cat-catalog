import data from '~/data/cats.json'
import {filterCats, orderCats} from '~/helpers'

export const state = () => ({
    list: data.products,
    filteredLists: data.products,
    filter: {
        search: '',
        free: false,
        priced: false,
        order: true,
        apply: false,
    }
})

export const actions = {
    setOrder({commit}) {
        commit('setOrder')
    },
    setApply({commit}) {
        commit('setApply')
    },
    setFree({commit}) {
        commit('setFree')
    },
    setPriced({commit}) {
        commit('setPriced')
    },
    orderCats({commit}) {
        commit('orderCats')
    },
    filterCats({commit}) {
        commit('filterCats')
    },
    filterSearch({commit}, search) {
        commit('setFilterSearch', search)
        commit('filterCats')
        commit('orderCats')
    },
    cleanFilter({commit}) {
        commit('cleanFilter')
    },
}

export const mutations = {
    setOrder(state) {
        state.filter.order = !state.filter.order
    },
    setApply(state) {
        state.filter.apply = !state.filter.apply
    },
    setFree(state) {
        state.filter.free = !state.filter.free
    },
    setPriced(state) {
        state.filter.priced = !state.filter.priced
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
    },
    cleanFilter(state) {
        state.filteredLists = state.list;
        state.filter.search = '';
        state.filter.free = false;
        state.filter.priced = false;
    }
}

export const getters = {
    getCats: (state) => {
        return state.list
    },
    getApply: (state) => {
        return state.filter.apply
    },
    getFree: (state) => {
        return state.filter.free
    },
    getPriced: (state) => {
        return state.filter.priced
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
    isClear: (state) => {
        return state.filter.search || state.filter.free || state.filter.priced
    },
}
import data from '~/data/cats.json'
import categories from '~/data/categories.json'

import {filterCats, orderCats} from '~/helpers'

export const state = () => ({
    list: data.products,
    filteredLists: data.products,
    categories: categories.options,
    filter: {
        search: '',
        category: {
            id: null,
            label: null
        },
        free: false,
        priced: false,
        order: null,
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
    setCategory({commit}, payload) {
        commit('setCategory', payload)
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
        state.filter.order = !Boolean(state.filter.order)
    },
    setApply(state) {
        state.filter.apply = !state.filter.apply
    },
    setFree(state) {
        state.filter.free = !state.filter.free
    },
    setCategory(state, payload) {
        state.filter.category = payload;
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
        state.filter.category = {
            id: null,
            label: null
        };
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
    getCategory: (state) => {
        return state.filter.category
    },
    getCategories: (state) => {
        return state.categories
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
        return Boolean(state.filter.search) && !state.filter.apply
    },
}
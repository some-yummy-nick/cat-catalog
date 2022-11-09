export const priceRu = (price) => price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ').concat(' ₽');

export function debounce(fn, delay) {
    let timeoutID = null
    return function () {
        clearTimeout(timeoutID)
        const args = arguments
        const that = this
        timeoutID = setTimeout(function () {
            fn.apply(that, args)
        }, delay)
    }
}

export function filterCats(filter, cats) {
    let filteredList = [...cats]

    if (filter.search !== '') {
        const searchList = []
        const searchTerm = filter.search.toLowerCase()
        for (let i = 0; i < filteredList.length; i++) {
            if (
                (filteredList[i].title !== null && filteredList[i].title.toLowerCase().includes(searchTerm))) {
                searchList.push(filteredList[i])
            }
        }
        filteredList = searchList
    }

    return filteredList
}

export function orderCats(order, leads) {
    const orderedList = [...leads]

    orderedList.sort(function (a, b) {
        if (order) {
            return a["price"] > b["price"] ? -1 : 1
        } else {
            return a["price"] > b["price"] ? 1 : -1
        }
    })

    return orderedList
}
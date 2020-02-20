import {createSelector} from 'reselect'

export const listPriceSelector = state => state.lists.list1 || []

export const totalPriceSelector = createSelector(listPriceSelector, elements => elements.reduce((acc, element) => acc + element.price, 0))
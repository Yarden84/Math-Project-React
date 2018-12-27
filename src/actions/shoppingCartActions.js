export function setItemStatus(item, status) {
    return {
        type: "ITEM_STATUS",
        id: item,
        payload: status
    }
}

export function setItemNum(item, num) {
    return {
        type: "ITEM_NUM",
        id: item,
        payload: num
    }
}

export function setItemsSum(num) {
    return {
        type: "ITEMS_SUM",
        payload: num
    }
}

export function setPriceSum(num) {
    return {
        type: "PRICE_SUM",
        payload: num
    }
}


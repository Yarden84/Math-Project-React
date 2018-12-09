export function setChaptersArr(chaptersFound) {
    return {
        type: "CHAPTERS_ARR",
        payload: chaptersFound
    }
}

export function foundChars(result) {
    return {
        type: "CHARS_FOUND",
        payload: result
    }
}
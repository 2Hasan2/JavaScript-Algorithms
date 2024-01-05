function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Return the index if found
        }
    }
    return -1; // Return -1 if not found
}

export default linearSearch;
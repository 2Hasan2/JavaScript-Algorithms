function jumpSearch(arr, target) {
    const n = arr.length;
    const jump = Math.floor(Math.sqrt(n));
    let left = 0;
    let right = 0;

    while (right < n && arr[right] < target) {
        left = right;
        right += jump;
    }

    for (let i = left; i < Math.min(right, n); i++) {
        if (arr[i] === target) {
            return i;
        }
    }

    return -1;
}

export default jumpSearch;
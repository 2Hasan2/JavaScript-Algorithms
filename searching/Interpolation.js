function interpolationSearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high && target >= arr[low] && target <= arr[high]) {
        const pos = low + Math.floor(((target - arr[low]) * (high - low)) / (arr[high] - arr[low]));

        if (arr[pos] === target) {
            return pos;
        } else if (arr[pos] < target) {
            low = pos + 1;
        } else {
            high = pos - 1;
        }
    }

    return -1;
}

export default interpolationSearch;
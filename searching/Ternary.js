function ternarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid1 = left + Math.floor((right - left) / 3);
        const mid2 = right - Math.floor((right - left) / 3);

        if (arr[mid1] === target) {
            return mid1;
        } else if (arr[mid2] === target) {
            return mid2;
        } else if (target < arr[mid1]) {
            right = mid1 - 1;
        } else if (target > arr[mid2]) {
            left = mid2 + 1;
        } else {
            left = mid1 + 1;
            right = mid2 - 1;
        }
    }

    return -1;
}

export default ternarySearch;
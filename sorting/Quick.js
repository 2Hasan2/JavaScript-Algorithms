function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[0];
    const left = [];
    const right = [];

    for (let i = 1; i < arr.length; i++) {
        arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
    }

    return quickSort(left).concat(pivot, quickSort(right));
}

export default quickSort;
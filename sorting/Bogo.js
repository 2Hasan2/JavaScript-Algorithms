function isSorted(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] > arr[i]) {
            return false;
        }
    }
    return true;
}

function bogoSort(arr) {
    while (!isSorted(arr)) {
        // Shuffle the array randomly
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    return arr;
}

export default bogoSort;
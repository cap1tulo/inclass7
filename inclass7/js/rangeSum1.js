function rangeSum1(start, end) {
    let sum = 0;
    for (let i = start; i <= end; i++) {
        for (let j = start; j <= i; j++) {
            sum += j;
        }
    }
    return sum;
}

console.log(rangeSum1(0, 3));
